import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n, *arr = list(map(int, data))
  
  dp = [0] * n
  dp[0] = arr[0]
  if n > 1 : dp[1] = arr[0] + arr[1]
  if n > 2 : dp[2] = max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2])
  
  for i in range(3, n) :
    # 현재 와인 안먹는 경우 | 이전 와인 스킵한 경우 | 이전 와인 스킵하지 않은 경우
    dp[i] = max(dp[i-1], dp[i-2] + arr[i], dp[i-3] + arr[i-1] + arr[i])

  print(dp[-1])
  
solution(input_data)
