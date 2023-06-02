from datetime import date
import scrapy
from w3lib.http import basic_auth_header
from urllib.parse import urlencode
import re


class StackoverflowSpider(scrapy.Spider):
    name = 'stackoverflow'
    # custom_settings = {
    #     'CONCURRENT_REQUESTS': 1,
    #     'DOWNLOAD_DELAY': 0.3,
    # }
    start_urls = ['https://ru.stackoverflow.com/users']
    re_email = re.compile(
        r"([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])")
    re_phone = re.compile(
        r"/(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g")

    def parse(self, response, **cb_kwargs):
        total_pages = int(response.css('a.s-pagination--item::text').extract()[-2])
        for page in range(2, total_pages + 1):

            for user in response.css('.grid--item.user-info'):
                url = user.css('.user-details a::attr("href")').get()
                cb_kwargs['user_tags'] = user.css('.user-tags a::text').extract()
                yield scrapy.Request(
                    url=response.urljoin(url),
                    callback=self.parse_user,
                    meta={"proxy": "http://email:password@gate2.proxyfuel.com:2000"},
                    cb_kwargs=cb_kwargs,
                )

            params = {
                'page': f'{page}',
                'tab': 'reputation',
                'filter': 'month',
            }
            url = self.start_urls[0] + '?' + urlencode(params)
            yield scrapy.Request(
                url=url,
                meta={"proxy": "http://email:password@gate2.proxyfuel.com:2000"},
                callback=self.parse,
                cb_kwargs=cb_kwargs
            )

    def parse_user(self, response, **cb_kwargs):
        profil_url = response.url
        name = response.css('.fs-headline2::text').get().strip()
        place = response.css('.wmx2.truncate::attr("title")').get()
        try:
            country = place.split(',')[0]if ',' in place else None,
        except:
            country = None
        try:
            city = place.split(',')[-1].strip() if ',' in place else place,
        except:
            city = None
        avatar = response.css('[alt="user avatar"]::attr("src")').get()
        links = response.css('.list-reset.s-anchors__inherit')[-1].css('a::attr("href")').extract()
        root_about_data = response.css('.js-about-me-content')
        about = re.sub(r"<.*?>", '',
                       ' '.join([i.strip() for i in root_about_data.css('p,li::text,a::attr("href")').extract()]))
        links.extend(root_about_data.css('a::attr("href")').extract())
        all_links = list(set(links))
        tags = cb_kwargs['user_tags']
        try:
            email = re.search(self.re_email, about)[0]
        except:
            email = None
        try:
            phone = re.search(self.re_phone, about)[0]
        except:
            phone = None

        telegram = None
        whatsapp = None
        icq = None
        viber = None

        for t in all_links:
            if 't.me' in t:
                telegram = t
            elif 'wa.me' in t or 'whatsapp' in t:
                whatsapp = t
            elif 'icq' in t:
                icq = t
            elif 'viber' in t:
                viber = t

        persona = {
            "iri": profil_url,
            "crawled_at": date.today(),
            "full_name": name,
            "username": None,
            "avatar_url": avatar,
            "dob": None,
            'location': {
                'country': country,
                'city': city,
            },
            "marital_status": None, "contacts": {
                "phones": [phone],
                "emails": [email],
                "telegram": telegram,
                "whatsapp": whatsapp,
                "icq": icq,
                "viber": viber,
            },
            "links": all_links,
            "education": None,
            "career": None,
            "tags": tags,
            "lang_proficiency": None,
            "about": about
        }
        yield persona
