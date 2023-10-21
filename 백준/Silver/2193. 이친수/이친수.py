import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n = int(data)
  dp = [0] * (n + 1)
  dp[0] = dp[1] = 1
  if n > 1 : dp[2] = 1 
  
  for i in range(3, n+1) :
    dp[i] = dp[i-1] + dp[i-2]
    
  print(dp[-1])
  
solution(input_data)


'''
1 : 1 / 1 
2 : 10 / 1
3 : 100 101 / 2
4 : 1000 1001 1010 / 3
5 : 10000 10001 10010 10100 10101 / 5
6 : 100000 100001 100010 100100 101000 100101 101001 101010 / 8
'''