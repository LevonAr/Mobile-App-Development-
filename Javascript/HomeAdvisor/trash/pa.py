# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request

class JobsSpider(scrapy.Spider):
    name = "titles"
    allowed_domains = ["imdb.com"]
