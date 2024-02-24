import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [int(v) for v in data]
  n = arr.pop(0)
  arr.sort(reverse=True)
  
  result = -1
  
  for i in range(n-2) : 
    if arr[i] < arr[i+1] + arr[i+2] : 
      result = sum(arr[i:i+3])
      break
  
  print(result)
  
solution(input_data)
