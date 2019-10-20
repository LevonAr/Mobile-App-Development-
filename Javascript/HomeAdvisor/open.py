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
