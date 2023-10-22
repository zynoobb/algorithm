import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n,m = map(int,data.split())
  dp = [[n]]
  dupTable = {n:True}
  idx = 0
  while not m in dp[idx] :
    temp = []
    dupTemp = {}
    for v in dp[idx] :
      arr = [v - 1, v + 1, v * 2]
      for j in arr :
        if verify(j) and not dupTable.get(j,None):
          temp.append(j)
          dupTemp[j] = True
    dp.append(temp)
    dupTable.update(dupTemp)
    idx += 1
  
  print(idx)
  print(len([v for v in dp[idx] if v == m]))

def verify (n) :
  return 0 <= n <= 100000
  
  
solution(input_data)