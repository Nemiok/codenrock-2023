import scrapy
from datetime import date
from urllib.parse import urlencode
from staff_crawlers.keywords import words
import re


class HhSpider(scrapy.Spider):
    name = 'hh.ru'
    start_urls = ['https://hh.ru/']

    def start_requests(self):
        for city in range(1, 4):
            for word in words:
                params = (
                    ('text', f'{word}'),
                    ('customDomain', '1'),
                    ('logic', 'any'),
                    ('pos', 'position,workplace_position,workplace_description'),
                    ('exp_period', 'all_time'),
                    ('exp_company_size', 'any'),
                    ('exp_industry', 'any'),
                    ('area', f'{city}'),
                    ('relocation', 'living'),
                    ('salary_from', '30000'),
                    ('salary_to', ''),
                    ('currency_code', 'RUR'),
                    ('experience', ['between1And3', 'between3And6', 'moreThan6']),
                    ('education', 'none'),
                    ('age_from', '20'),
                    ('age_to', '55'),
                    ('gender', 'unknown'),
                    ('employment', 'full'),
                    ('schedule', ['fullDay', 'remote']),
                    ('order_by', 'relevance'),
                    ('search_period', '0'),
                    ('items_on_page', '100'),
                    ('no_magic', 'false'),
                    ('from', 'suggest_post'),
                )
                url = 'https://hh.ru/search/resume?' + urlencode(params)
                yield scrapy.Request(
                    url=url,
                    callback=self.parse,
                    meta={'ua': 'mobile'}
                )

    def parse(self, response, **cb_kwargs):
        text = response.text
        users_hash = re.findall(r"(?<=\"hash\":\s\")[a-zA-Z0-9а-яА-Я]*(?=\",\s\"hhid)", text)
        for u_hash in users_hash:
            url = f"https://hh.ru/resume/{u_hash}?query={response.url.split('&')[0].split('=')[1]}&hhtmFrom" \
                  f"=resume_search_result "
            yield response.follow(url=url,
                                  callback=self.parse_persona,
                                  meta={'ua': 'mobile'}
                                  )

        if response.xpath('//a[@data-qa="pager-next"]/@href').get() is not None:
            next_page = 'https://hh.ru' + response.xpath('//a[@data-qa="pager-next"]/@href').get()
            yield response.follow(url=next_page,
                                  callback=self.parse,
                                  meta={'ua': 'mobile'},
                                  )

    @staticmethod
    def parse_persona(response):
        bad_chars = ['\r', '\n']
        tags = response.xpath('//div[@data-qa="skills-table"]').css(
            'span.bloko-tag__section.bloko-tag__section_text::text').getall()

        t = [i for i in response.xpath('//p[@data-qa="resume-block-language-item"]/text()').getall() if i != ' — ']
        lang_proficiency = [{x[0]: x[1]} for x in zip(t[::2], t[1::2])]

        about = response.xpath('//div[@data-qa="resume-block-skills-content"]/text()').get()
        if about:
            about = "".join(filter(lambda i: i not in bad_chars, about))
        else:
            about = None

        dob = response.xpath('//span[@data-qa="resume-personal-birthday"]/text()').get()
        if dob:
            dob = dob.strip().replace('\xa0', ' ')
        else:
            dob = None

        # Раздел - Карьера
        career_block = response.xpath('//div[@data-qa="resume-block-experience"]') \
            .css('div.bloko-columns-row').css('div.resume-block-item-gap')
        career = []
        for i in career_block:
            career.append(
                {
                    "company": i.css('div.bloko-text.bloko-text_strong::text').get(),
                    "company_web_site": None,
                    "city": i.css('div.resume-block-container').css('p::text').get(),
                    "employemnt_year": i.css(
                        'div.bloko-column.bloko-column_xs-4.bloko-column_s-2.bloko-column_m-2.bloko-column_l-2:'
                        ':text').getall()[:3][-1],
                    "quit_year": i.css(
                        'div.bloko-column.bloko-column_xs-4.bloko-column_s-2.bloko-column_m-2.bloko-column_l-2:'
                        ':text').getall()[:6][-1],
                    "position": i.xpath('//div[@data-qa="resume-block-experience-position"]/text()').get(),
                    "desc": i.xpath('//div[@data-qa="resume-block-experience-description"]/text()').get(),
                })

        # Раздел - Образование
        edu_block = response.xpath('//div[@data-qa="resume-block-education"]'). \
            css('div.resume-block-item-gap').css('div.bloko-columns-row').css('div.resume-block-item-gap')
        edu = []
        for i in edu_block:
            if len(i.xpath('//div[@data-qa="resume-block-education-organization"]/text()').getall()) > 2:
                chair = i.xpath('//div[@data-qa="resume-block-education-organization"]/text()').getall()[2]
            else:
                chair = None
            edu.append(
                {
                    "faculty": i.xpath('//div[@data-qa="resume-block-education-organization"]/text()').get(),
                    "chair": chair,
                    "enter_year": None,
                    "graduation_year": i.css('div.bloko-column.bloko-column_xs-4.bloko-column_s-2.bloko-column'
                                             '_m-2.bloko-column_l-2::text').get(),
                }

            )

        yield {
            "iri": response.url,
            "crawled_at": date.today(),
            "dob": dob,
            'location': {
                'country': 'Russia',
                'city': response.xpath('//span[@data-qa="resume-personal-address"]/text()').get(),
            },
            "education": edu,
            "career": career,
            "tags": tags,
            "lang_proficiency": lang_proficiency,
            "about": about,
        }
