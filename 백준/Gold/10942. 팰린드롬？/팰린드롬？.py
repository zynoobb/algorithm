import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  temp = [list(map(int, v.split())) for v in data]
  [n],arr,[m],*queries = temp
  
  dp = [[0 for _ in range(n)] for _ in range(n)]
  result = []
  
  for i in range(n) : 
    dp[i][i] = 1
  
  for i in range(n-1) :
    if arr[i] == arr[i+1] : dp[i][i+1] = 1
    else : dp[i][i+1] = 0
  
  for i in range(n-2) :
    for j in range(n-2-i) : 
      k = i+j+2
      if arr[j] == arr[k] and dp[j+1][k-1] == 1 :
        dp[j][k] = 1
        
  for s,e in queries :
    result.append(dp[s-1][e-1])
  
  print('\n'.join(map(str,result)))
  
solution(input_data)