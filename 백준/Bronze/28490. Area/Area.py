import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  arr = [list(map(int, v.split())) for v in data]
  
  result = 0
  for i in range(n) :
    a,b, = arr[i]
    if a * b > result : 
      result = a * b
  
  print(result)
  
solution(input_data)