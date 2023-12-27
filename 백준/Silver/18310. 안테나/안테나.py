import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [[n], arr] = [list(map(int, v.split())) for v in data]
  arr.sort()
  print(arr[(n-1) // 2])
  
solution(input_data)
