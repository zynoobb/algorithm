import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [n,m],coffees = arr[0],[0] + arr[1]
  dp = [[float('inf') for _ in range(m+1)] for _ in range(n+1)]
  for i in range(n+1) : dp[i][0] = 0
  
  for i in range(n+1) :
    for j in range(m+1) : 
      if j >= coffees[i] : 
        dp[i][j] = min(dp[i-1][j], dp[i-1][j-coffees[i]] + 1)
      else :
        dp[i][j] = dp[i-1][j]
  
  print(dp[-1][-1] if dp[-1][-1] != float('inf') else -1)
  
solution(input_data)