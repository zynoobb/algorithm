import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N,arr = int(data[0]),list(map(int, data[1].split()))
  dp = [1 for _ in range(N)]
  
  for i in range(1, N) : 
    for j in range(i) :
      if arr[i] > arr[j] :
        dp[i] = max(dp[i], dp[j] + 1)

  print(max(dp))
  
solution(input_data)

