import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data[1], 2)
  result = 0
  while n :
    n = n - (n & (~n) + 1)
    result += 1
  
  print(result)
  
solution(input_data)
