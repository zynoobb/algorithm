import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(int, data))
  n = arr.pop(0)
  sum, d = [0,0], [0,0]
  
  for i in range(n) :
    if arr[i] > d[0] :
      d[0] = arr[i]
      sum[0] += 1
    if arr[-(i+1)] > d[1] :
      d[1] = arr[-(i+1)]
      sum[1] += 1
      
  print(sum[0])
  print(sum[1])

solution(input_data)