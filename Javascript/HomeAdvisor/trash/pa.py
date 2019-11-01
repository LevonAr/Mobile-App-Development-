# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request

class JobsSpider(scrapy.Spider):
    name = "titles"
    allowed_domains = ["imdb.com"]
    start_urls = ["https://www.imdb.com/"]
    
    def parse(self, response):
        titles = response.xpath('//div[@class="title"]/a/text()').extract()
        print(titles)    
