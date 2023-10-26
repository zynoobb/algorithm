import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(int, data))
  result = - arr.pop(0) + 1
  
  for v in arr :
    result += v

  print(result)
  
solution(input_data)
