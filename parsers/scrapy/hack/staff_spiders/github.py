import scrapy
from scrapy import Request
import math
import re
from itertools import cycle
from staff_crawlers.items import Persona
from datetime import date
from staff_crawlers.keywords import languages, countries


class GithubSpider(scrapy.Spider):
    name = 'github.com'
    custom_settings = {
        'CONCURRENT_REQUESTS': 2,
        'DOWNLOAD_DELAY': 0.2,
    }
    start_urls = ['https://github.com']
    tokens = cycle(['ghp_1', 'ghp_2'])

    def start_requests(self, **cb_kwargs):
        for country in countries:
            headers = {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': 'token ' + next(self.tokens)
            }
            cb_kwargs['country'] = country
            for lang in languages:
                cb_kwargs['lang'] = lang
                url = f'https://api.github.com/search/users?q=language:{lang}%20location:{country}&per_page=100'
                yield Request(url=url, headers=headers, callback=self.parse, cb_kwargs=cb_kwargs)

    def parse(self, response, **cb_kwargs):
        pages = math.ceil(response.json()['total_count'] / 100)
        if 0 < pages > 10:
            for page in range(1, 11):
                url = f"https://api.github.com/search/users?q=language:" \
                      f"{cb_kwargs['lang']}%20location:{cb_kwargs['country']}&per_page=100&page={page}"
                headers = {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': 'token ' + next(self.tokens)
                }
                yield Request(url=url, headers=headers, callback=self.parse_pages, cb_kwargs=cb_kwargs)
        else:
            for page in range(1, pages + 1):
                url = f"https://api.github.com/search/users?q=language:" \
                      f"{cb_kwargs['lang']}%20location:{cb_kwargs['country']}&per_page=100&page={page}"
                headers = {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': 'token ' + next(self.tokens)
                }
                yield Request(url=url, headers=headers, callback=self.parse_pages, cb_kwargs=cb_kwargs)

    def parse_pages(self, response, **cb_kwargs):
        for i in response.json()['items']:
            url = f"https://api.github.com/users/{i['login']}"
            headers = {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': 'token ' + next(self.tokens)
            }
            yield Request(url=url, headers=headers, callback=self.parse_user, cb_kwargs=cb_kwargs)

    def parse_user(self, response, **cb_kwargs):
        cb_kwargs['login'] = response.json()['login']
        cb_kwargs['avatar_url'] = response.json()['avatar_url']
        cb_kwargs['html_url'] = response.json()['html_url']
        cb_kwargs['name'] = response.json()['name']
        cb_kwargs['company'] = response.json()['company']
        cb_kwargs['blog'] = response.json()['blog']
        cb_kwargs['location'] = response.json()['location']
        cb_kwargs['bio'] = response.json()['bio']
        cb_kwargs['twitter_username'] = response.json()['twitter_username']
        url = f"https://api.github.com/users/{cb_kwargs['login']}/events/public"
        headers = {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'token ' + next(self.tokens)
        }
        yield Request(url=url, headers=headers, callback=self.parse_person, cb_kwargs=cb_kwargs)

    @staticmethod
    def parse_person(response, **cb_kwargs):
        try:
            mail = re.search(r'[\w.-]+@[\w.-]+(\.[\w]+)+', response.text)[0]
        except:
            mail = None

        persona = Persona()
        persona["iri"] = cb_kwargs['html_url']
        persona["crawled_at"] = date.today()
        persona["full_name"] = cb_kwargs['name']
        persona["username"] = cb_kwargs['login']
        persona["avatar_url"] = cb_kwargs['avatar_url']
        persona["dob"] = None
        if ',' in cb_kwargs['location']:
            persona['location'] = {
                'country': cb_kwargs['location'].split(',')[1],
                'city': cb_kwargs['location'].split(',')[0],
            }
        else:
            persona['location'] = {
                'country': cb_kwargs['location'],
                'city': None,
            }

        persona["marital_status"] = None
        persona["contacts"] = {
            "phones": [None],
            "emails": [mail],
            "telegram": None,
            "skype": None,
            "whatsapp": None,
            "icq": None,
            'twitter': cb_kwargs['twitter_username'],
        }
        persona["links"] = [cb_kwargs['blog']]
        persona["education"] = [None]
        persona["career"] = [cb_kwargs['company']]
        persona["tags"] = None
        persona["lang_proficiency"] = None
        persona["about"] = cb_kwargs['bio']
        yield persona
