import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  _,m = map(int, data.pop(0).split())
  coins = sorted(list(map(int, data)))
  dp = [0] * (m+1)
  dp[0] = 1

  for coin in coins :
    for i in range(coin, m+1) :
      dp[i] += dp[i-coin]
  
  print(dp[m])
  
solution(input_data)
