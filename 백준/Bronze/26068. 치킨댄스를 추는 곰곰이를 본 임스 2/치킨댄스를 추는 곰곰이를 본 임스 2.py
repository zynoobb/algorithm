import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  data.pop(0)
  arr = list(map(lambda x : int(x[2:]), data))
  result = sum(1 for v in arr if v <= 90)
  print(result)
  
solution(input_data)
