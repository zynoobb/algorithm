import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  _,m = map(int, data.pop(0).split())
  coins = list(map(int, data))
  dp = [10001] * (m + 1)
  dp[0] = 0
  
  for i in coins :
    for j in range(i, m + 1) :
      dp[j] = min(dp[j], dp[j-i] + 1)
  
  print(dp[m] if 10001 > dp[m] else -1)
  
solution(input_data)
