import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,m = arr.pop(0)
  arr = [[0,0]] + arr

  dp = [[0 for _ in range(n+1)] for _ in range(m+1)]
  
  for i in range(1, m+1) : 
    for j in range(1, n+1) : 
      if j >= arr[i][0] : 
        dp[i][j] = max(dp[i-1][j], dp[i-1][j-arr[i][0]] + arr[i][1])
      else : 
        dp[i][j] = dp[i-1][j] 
  
  print(dp[-1][-1])
  
solution(input_data)