import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

from collections import Counter

def solution (data) :
  data.pop(0)
  _count = Counter(data)
  
  _sort = sorted(_count.items(), key=lambda x : [-x[1],int(x[0])])
  print(_sort[0][0])

solution(input_data)