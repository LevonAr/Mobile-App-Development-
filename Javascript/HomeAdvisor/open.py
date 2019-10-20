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


sheet1 = wb.add_sheet('Sheet 1')

for i in desc_dict:
    pattern1 = "(\d{3}) (\d{3}) (\d{4})"
    pattern2 = "(\d{3})-(\d{3})-(\d{4})"
    pattern3 = "(\d{3}) (\d{3})-(\d{4})"
    pattern4 = "(\d{3}) (\d{3})-(\d{4})"
    pattern5 = "(\d{3})[)](\d{3})-(\d{4})"
    pattern6 = "(\d{3})[)](\d{3}) (\d{4})"
    pattern7 = "(\d{3})-(\d{7})"
    pattern8 = "(\d{3}) (\d{7})"
    pattern9 = "(\d{10})"
    pattern10 = "(\d{3})[)] (\d{3})-(\d{4})"
    pattern11 = "(\d{3})[)] (\d{3}) (\d{4})"

    match1 = re.search(pattern1, desc_dict[i])
    match2 = re.search(pattern2, desc_dict[i])
    match3 = re.search(pattern3, desc_dict[i])
    match4 = re.search(pattern4, desc_dict[i])
    match5 = re.search(pattern5, desc_dict[i])
    match6 = re.search(pattern6, desc_dict[i])
    match7 = re.search(pattern7, desc_dict[i])
    match8 = re.search(pattern8, desc_dict[i])
    match9 = re.search(pattern9, desc_dict[i])
    match10 = re.search(pattern10, desc_dict[i])
    match11 = re.search(pattern11, desc_dict[i])
