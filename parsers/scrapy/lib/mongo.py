import os
from pymongo import MongoClient

def get_connection():
    mongo_host = os.environ.get('MONGO_HOST', '192.168.1.37')
    mongo_user = os.environ.get('MONGO_USER', '')
    mongo_pass = os.environ.get('MONGO_PASS', '')
    mongo_port = int(os.environ.get('MONGO_PORT', 27017))

    if mongo_host == 'not_defined':
        print('mongo_host not defined')
        exit()
    if mongo_host == '192.168.1.37':
        client = MongoClient(mongo_host, mongo_port)
    else:
        client = MongoClient('mongodb://%s:%s@%s:%s/?authSource=admin&readPreference=primary&appname=MongoDB&ssl=false' % (mongo_user, mongo_pass, mongo_host, mongo_port))
    return client