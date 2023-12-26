import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N = int(data[0])
  dp = [[0] * 10 for _ in range(N)]
  for i in range(9) :
    dp[0][i+1] = 1
    
  for i in range(1, N) :
    for j in range(10) :
      if j == 0 : dp[i][j] = dp[i-1][1]
      elif j == 9 : dp[i][j] = dp[i-1][8]
      else : dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
      
  result = sum(dp[-1]) % 1000000000
  print(result)
  
solution(input_data)