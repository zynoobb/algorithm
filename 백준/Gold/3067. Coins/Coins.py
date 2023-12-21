import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))

  testCase = []
  for i in range(0, len(data), 3) : 
    testCase.append(data[i:i+3])
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(map(str, result)))

def act (arr) :
  N, T = int(arr[0]), int(arr[2])
  coins = list(map(int, arr[1].split()))
  
  dp = [0 for _ in range(T+1)]
  dp[0] = 1
  
  for coin in coins :
    for i in range(coin, T+1) :
      dp[i] += dp[i-coin]
  
  return dp[-1]
  
solution(input_data)