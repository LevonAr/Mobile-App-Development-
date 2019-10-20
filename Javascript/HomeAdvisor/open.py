import json
import re
import sys
import xlwt
from xlwt import Workbook 

if len(sys.argv)!=3:
    print("Usage: python open.py [input_file.json] [output_file.xls]")
    sys.exit(1)
