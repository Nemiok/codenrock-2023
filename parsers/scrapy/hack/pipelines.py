# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import json

from bson import ObjectId, json_util
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

# from serbian_real_estate import settings
from scrapy.exceptions import DropItem
from lib.mongo import *
from lib.rabbitmq import *


class SerbianRealEstatePipeline:
    def process_item(self, item, spider):
        return item


class MongoDBPipeline(object):

    def __init__(self):
        client = get_connection()
        # Нужно для каждого сайта свое хранилище, если данные будут разные, если же формат данных у всех одинаковый,
        # тогда сохраняем все в одну коллекцию. При записи данных проверяем item.url
        db = client['hack']
        #self.collection = db['cityexpert.rs']
        self.collection = db['stackoverflow']
        self.rabbitmq_connection = get_rabbitmq_connection()
        self.init_channel()

    def init_channel(self):
        self.channel = self.rabbitmq_connection.channel()
        self.channel.queue_declare(queue='hack')


    def process_item(self, item, spider):
        valid = True

        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))
        if valid:
            result = self.collection.find({'url': item['url']})
            result_list = list(result)
            if len(result_list) == 0:
                print('------------------------------ upsert record! -----------------------------')
                print('------------------------------ upsert record! -----------------------------')
                print('------------------------------ upsert record! -----------------------------')
                print('------------------------------ upsert record! -----------------------------')
                result = self.collection.replace_one({'url': item['url']}, dict(item), upsert=True)
                if result.upserted_id is not None:
                    self.notify_new_item(result.upserted_id)
            # self.collection.insert_one(dict(item))
            # log.msg("Question added to MongoDB database!",
            #        level=log.DEBUG, spider=spider)
        return item

    def notify_new_item(self, mongo_id):
        print('Notify ID: ', mongo_id)
        result = self.collection.find_one({"_id": ObjectId(mongo_id)})
        self.send_rabbitmq('hack', json.dumps(result, default=json_util.default))
        # print(result)

    def send_rabbitmq(self, key, body):
        self.channel.basic_publish(exchange='',
                              routing_key=key,
                              body=body)

    def __del__(self):
        self.rabbitmq_connection.close()
