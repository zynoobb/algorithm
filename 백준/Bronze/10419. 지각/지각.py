import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import math

def solution (data) :
  data.pop(0)
  result = list(map(lambda x : act(int(x)), data))
  print('\n'.join(map(str, result)))

def act (n) :
  max = 0
  for i in range(1, n + 1) :
    if n >= i * (i + 1) : max = i
    else : break
  
  return max
      
solution(input_data)