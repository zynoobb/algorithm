import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  _,k = arr[0]
  arr[1].sort()
  print(arr[1][k-1])
  
solution(input_data)
