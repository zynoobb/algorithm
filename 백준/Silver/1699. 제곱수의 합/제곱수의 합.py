import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

from math import sqrt

def solution (data) :
  N = int(data)
  dp = [v for v in range(N+1)]
  
  for i in range(2,N+1) :
    for j in range(1, int(sqrt(i)) + 1) :
      dp[i] = min(dp[i], dp[i-(j*j)] + 1)

  print(dp[N])
      
solution(input_data)