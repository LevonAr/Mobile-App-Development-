import scrapy
from scrapy import Request


class JobsSpider(scrapy.Spider):
    name = "jobs"
    allowed_domains = ["craigslist.org"]
    start_urls = ["https://newyork.craigslist.org/search/sks?"]

    def parse(self, response):
        jobs = response.xpath('//p[@class="result-info"]')

        for job in jobs:
