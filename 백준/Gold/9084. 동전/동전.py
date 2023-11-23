import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  data.pop(0)
  result = []
  
  for v in range(0, len(data), 3) :
    result.append(act(data[v:v+3]))
  
  print('\n'.join(map(str,result)))
 
def act(arr) :
  _, coins, [target] = list(map(lambda x : list(map(int, x.split())), arr))
  
  dp = [0] * (target + 1)
  dp[0] = 1
  
  for coin in coins :
    for i in range(coin, target + 1) :
      dp[i] += dp[i - coin]
 
  return dp[-1]
  
  
solution(input_data)