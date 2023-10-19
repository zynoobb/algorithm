import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N = int(data.pop(0))
  arr = list(map(int, data[0].split()))
  dp = [[0] * 21 for _ in range(N-1)]
  expect = arr.pop()
  dp[0][arr[0]] = 1
  
  for i in range(len(arr) - 1) :
    for j in range(len(dp[i])) : 
      if dp[i][j] != 0 :
        if 0 <= j + arr[i+1] <= 20 : dp[i+1][j + arr[i+1]] += dp[i][j]
        if 0 <= j - arr[i+1] <= 20 : dp[i+1][j - arr[i+1]] += dp[i][j]
  
  print(dp[-1][expect])
  
solution(input_data)