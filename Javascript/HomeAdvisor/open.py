import json
import re
import sys
import xlwt
from xlwt import Workbook 

if len(sys.argv)!=3:
    print("Usage: python open.py [input_file.json] [output_file.xls]")
    sys.exit(1)


input_file = sys.argv[1]    

output_file = sys.argv[2]

with open(input_file) as json_file:
    data = json.load(json_file)

counter = 0
desc_dict = {}
location_dict = {}
title_dict = {}
link_dict = {}

for i in data:
    desc_dict[counter] = data[counter]["Description"]
    location_dict[counter] = data[counter]["Address"]
    title_dict[counter] = data[counter]["Title"]
    link_dict[counter] = data[counter]["URL"]
    counter = counter+1

wb = Workbook() 
