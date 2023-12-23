import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  result = []
  for v in data : 
    a,b = map(int, v.split())
    result.append('NO BRAINS' if a < b else 'MMM BRAINS')
  
  print('\n'.join(result))

solution(input_data)