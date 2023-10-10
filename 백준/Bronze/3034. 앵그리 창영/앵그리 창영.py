import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

import math

def solution (data) :
  _,w,h = map(int, data.pop(0).split())
  max = math.sqrt(w ** 2 + h ** 2)
  result = ['DA' if max >= int(v) else 'NE' for v in data]
  print('\n'.join(result))
    
solution(input_data)
