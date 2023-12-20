import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N,K = map(int, data.pop(0).split())  
  
  importants, times = [0],[0]
  
  for v in data :
    im,ti = map(int, v.split())
    importants.append(im)
    times.append(ti)
  
  dp = [[0 for _ in range(N+1)] for _ in range(K+1)]
  
  for i in range(1, K+1) :
    for j in range(1, N+1) : 
      if j >= times[i] :
        dp[i][j] = max(dp[i-1][j], dp[i-1][j-times[i]] + importants[i])
      else :
        dp[i][j] = dp[i-1][j]
  
  print(dp[K][N])
  
solution(input_data)