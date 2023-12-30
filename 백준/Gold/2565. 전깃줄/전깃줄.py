import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N = int(data.pop(0))
  arr = [list(map(int, v.split())) for v in data]
  arr.sort(key= lambda x : [x[0],x[1]])
  
  dp = [1 for _ in range(N)]
  
  for i in range(N) :
    for j in range(i) :
      if arr[i][1] > arr[j][1] : 
        dp[i] = max(dp[i], dp[j] + 1)
  
  print(N - max(dp))
  
solution(input_data)
