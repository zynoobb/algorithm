import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data[0])
  arr = list(map(int, data[1].split()))
  dp = [* arr]
  
  for i in range(n) :
    for j in range(i) :
      if arr[i] > arr[j] and arr[i] + dp[j] > dp[i] : 
        dp[i] = arr[i] + dp[j]
  
  print(max(dp))
  
solution(input_data)

