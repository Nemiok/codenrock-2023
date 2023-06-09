# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class Apartment(scrapy.Item):
    price = scrapy.Field()
    total_floors = scrapy.Field()
    square = scrapy.Field()
    street = scrapy.Field()
    address_1 = scrapy.Field()
    address_2 = scrapy.Field()
    address = scrapy.Field()
    url = scrapy.Field()
    city = scrapy.Field()
    google_map_link = scrapy.Field()
    images = scrapy.Field()
    video = scrapy.Field()
    ceiling_height = scrapy.Field()
    bathrooms = scrapy.Field()
    bedrooms = scrapy.Field()
    toilets = scrapy.Field()
    elevator_range = scrapy.Field()
    parking_spots = scrapy.Field()
    deposit_amount = scrapy.Field()
    payment_option = scrapy.Field()
    max_tenants = scrapy.Field()
    min_lease = scrapy.Field()
    year_house_construction = scrapy.Field()
    last_renovated = scrapy.Field()
    elevator = scrapy.Field()
    intercom = scrapy.Field()
    fridge_freeezer = scrapy.Field()
    fridge = scrapy.Field()
    internet = scrapy.Field()
    cable = scrapy.Field()
    tub = scrapy.Field()
    aircon = scrapy.Field()
    french_bed = scrapy.Field()
    stove = scrapy.Field()
    tv = scrapy.Field()
    shower = scrapy.Field()
    washer = scrapy.Field()
    kitchen_vent = scrapy.Field()
    bidet = scrapy.Field()
    jacuzzi = scrapy.Field()
    fireplace = scrapy.Field()
    single_bed = scrapy.Field()
    dish_washer = scrapy.Field()
    vacuum = scrapy.Field()
    oven = scrapy.Field()
    phone = scrapy.Field()
    drier = scrapy.Field()
    alarm = scrapy.Field()
    attic = scrapy.Field()
    loft = scrapy.Field()
    gym = scrapy.Field()
    laundry = scrapy.Field()
    loggia = scrapy.Field()
    sauna = scrapy.Field()
    pantry = scrapy.Field()
    basement = scrapy.Field()
    garden = scrapy.Field()
    swimming_pool = scrapy.Field()
    terrace = scrapy.Field()
    distance_center = scrapy.Field()
    furnished = scrapy.Field()
    pets = scrapy.Field()
    additional_expenses = scrapy.Field()
