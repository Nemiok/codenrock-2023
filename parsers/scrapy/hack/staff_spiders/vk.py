import scrapy
import json
from datetime import date

from staff_crawlers.keywords import universities, token
from staff_crawlers.items import Persona


class VkSpider(scrapy.Spider):
    name = 'vk.com'
    custom_settings = {
        'DOWNLOAD_DELAY': 0.2,
    }

    def start_requests(self):
        tech_univers = json.dumps(universities)
        api_met = 'https://api.vk.com/method/users.search?'
        back_d = 'nickname,bdate,city,country,connections,contacts,' \
                 'domain,education,interests,site,exports,career,' \
                 'about,occupation,relation, crop_photo'
        for num in json.loads(tech_univers):
            for y in list(range(1995, 2025)):
                url = f'{api_met}university={num["id"]}&university_year={y}&' \
                      f'fields={back_d}&count=1000&access_token={token}&v=5.131'
                yield scrapy.Request(url=url, method='GET', callback=self.parse)

    def parse(self, response, **kwargs):
        relation_status = {
            1: 'не женат/не замужем',
            2: 'есть друг/есть подруга',
            3: 'помолвлен/помолвлена',
            4: 'женат/замужем',
            5: 'всё сложно',
            6: 'в активном поиске',
            7: 'влюблён/влюблена',
            8: 'в гражданском браке',
            0: 'не указано'
        }
        for i in response.json()['response']['items']:
            edu = {
                "faculty": i.get('faculty_name'),
                "chair": i.get('university_name'),
                "enter_year": None,
                "graduation_year": i.get('graduation')
            }
            # career = []
            # if i.get('career') and len(i['career']) > 0:
            #     career = {
            #         "company": i.get['career']('company'),
            #         "company_web_site": i.get('site'),
            #         "employemnt_year": i.get['career']('from'),
            #         "quit_year": i.get['career']('until'),
            #         "position": i.get['career']('position'),
            #         "desc": None
            #     }

            persona = Persona()
            persona["iri"] = f"https://vk.com/{i.get('domain')}"
            persona["crawled_at"] = date.today()
            persona["full_name"] = f"{i.get('last_name')} {i.get('first_name')}"
            persona["username"] = i.get('nickname') if i.get('nickname') is not None else i.get('domain')
            if i.get('crop_photo'):
                photo = i['crop_photo']['photo']['sizes'][2]['url']
            else:
                photo = None
            persona["avatar_url"] = photo
            persona["dob"] = i.get('bdate')
            if i.get('country'):
                country = i['country']['title']
            else:
                country = None
            if i.get('city'):
                city = i['city']['title']
            else:
                city = None
            persona['location'] = {
                'country': country,
                'city': city,
            }
            persona["marital_status"] = relation_status.get(i.get('relation'))
            persona["contacts"] = {
                "phones": [i.get('mobile_phone'), i.get('home_phone')],
                "emails": [None],
                "telegram": i.get('connections'),
                "skype": i.get('skype'),
                "whatsapp": None,
                "icq": None,
            }
            persona["links"] = [i.get('site')]
            persona["education"] = [edu]
            persona["career"] = [None]
            persona["tags"] = i.get('interests')
            persona["lang_proficiency"] = None
            persona["about"] = i.get('about')
            yield persona
