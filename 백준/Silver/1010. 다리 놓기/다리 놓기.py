import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
    
def solution (data) :
  data.pop(0)
  dp = [[1], [1,1]]
  for i in range(2,31) :
    temp = [1] * (len(dp[i-1]) +  1)
    for j in range(1, len(dp[i-1])) :
      temp[j] = dp[i-1][j-1] + dp[i-1][j]
    dp.append(temp)
  
  result = []
  for el in data :
    n,m = sorted(map(int,el.split()))
    result.append(dp[m][n])
  
  print('\n'.join(map(str,result)))

solution(input_data)

'''
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1 
1 5 10 10 5 1 
'''