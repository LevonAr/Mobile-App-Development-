import json

with open('quotes.json') as json_file:
    data = json.load(json_file)

print(data)
