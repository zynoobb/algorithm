import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data[0])
  arr = list(map(int, data[1].split()))
  dp = [1] * n
  
  for i in range(n) : 
    for j in range(i) :
      if arr[j] > arr[i] and dp[j] + 1 > dp[i] :
        dp[i] = dp[j] + 1
  
  print(max(dp))

solution(input_data)

