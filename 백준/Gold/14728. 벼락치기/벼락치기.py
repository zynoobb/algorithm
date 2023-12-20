import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N,T = map(int, data.pop(0).split())
  time,score = [0],[0]
  
  for v in data :
    t,s = map(int, v.split())
    time.append(t)
    score.append(s)
  
  dp = [[0 for _ in range(T+1)] for _ in range(N+1)]
  
  for i in range(1, N+1) :
    for j in range(1, T+1) :
      if j >= time[i] : 
        dp[i][j] = max(dp[i-1][j], dp[i-1][j-time[i]] + score[i])
      else :
        dp[i][j] = dp[i-1][j]
  
  print(dp[N][T])
  
solution(input_data)