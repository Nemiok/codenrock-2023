import scrapy
from scrapy import FormRequest
import json


class HabrHabrSpider(scrapy.Spider):
    name = 'habr_qa'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:98.0) Gecko/20100101 Firefox/98.0',
        'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://account.habr.com',
        'Connection': 'keep-alive',
        'Referer': 'https://account.habr.com/login/?consumer=career&state=bslogin',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
    }
    data = {
        'state': 'bslogin',
        'consumer': 'career',
        'email': 'email@mail.ru',
        'password': '123',
        'captcha': '',
        'g-recaptcha-response': '',
        'captcha_type': 'recaptcha',
    }

    def start_requests(self, **cb_kwargs):
        url = 'https://account.habr.com/ajax/login/'
        cb_kwargs['start_url'] = None
        yield FormRequest(
            url=url,
            formdata=self.data,
            headers=self.headers,
            callback=self.login,
            cb_kwargs=cb_kwargs,
        )

    def login(self, response, **cb_kwargs):
        if cb_kwargs['start_url'] is None:
            cb_kwargs['start_url'] = 'https://career.habr.com/resumes/qna'
            url = 'https://account.habr.com/login/?consumer=career&state=bslogin'
            yield FormRequest(
                url=url,
                formdata=self.data,
                headers=self.headers,
                callback=self.login,
                cb_kwargs=cb_kwargs,
            )
        else:
            yield scrapy.Request(url=cb_kwargs['start_url'], callback=self.parse_page)

    def parse_page(self, response, **cb_kwargs):
        users_data = json.loads(response.css('script[type="application/json"]::text').get())
        total_pages = int(users_data['resumes']['meta']['totalPages'])

        # Pagination
        for page in range(2, total_pages + 1):

            # Collect users links and some data from page
            for user in users_data['resumes']['list']:
                cb_kwargs['fullname'] = user['title']
                cb_kwargs['href'] = user['href']
                cb_kwargs['avatar'] = user['avatar']['src']
                cb_kwargs['specialization'] = user['specialization']
                cb_kwargs['location'] = user['location']
                cb_kwargs['activity'] = user['activity']
                yield cb_kwargs
    #             yield scrapy.Request(url=response.urljoin(user['href']), callback=self.parse_person)
    #
    #         url = f'https://career.habr.com/resumes?order=last_visited&page={page}'
    #         yield scrapy.Request(url=url, callback=self.parse_page)
    #
    # def parse_person(self, response, **cb_kwargs):
    #     user_data = json.loads(response.css('script[type="application/json"]::text').get())
    #     yield {'Имя': user_data['user']['title'], 'Link': user_data['user']['href']}
