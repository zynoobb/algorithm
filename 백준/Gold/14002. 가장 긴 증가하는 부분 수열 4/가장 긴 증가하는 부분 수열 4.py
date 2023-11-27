import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data[0])
  arr = list(map(int, data[1].split()))
  dp = [1 for _ in arr]
  
  
  for i in range(n) : 
    for j in range(i) : 
      if arr[i] > arr[j] and dp[j] + 1 > dp[i] :
        dp[i] = dp[j] + 1
        
  maxLen = result1 = max(dp)
  maxArr = []
  
  reverseIdx = n - 1
  while maxLen :
    if dp[reverseIdx] == maxLen :
      maxArr.append(arr[reverseIdx])
      maxLen -= 1
    reverseIdx -= 1

  result2 = list(map(str, reversed(maxArr)))
  print(result1)
  print(' '.join(result2))
  
solution(input_data)

