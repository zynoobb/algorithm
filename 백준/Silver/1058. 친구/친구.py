import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  graph = [[0] * n for _ in range(n)]
  
  for i in range(n) :
    for j in range(n) :
      for k in range(n) :
        if j == k : continue
        elif data[j][k] == 'Y' or (data[j][i] == 'Y' and data[i][k] == 'Y') :
          graph[j][k] = 1

  result = 0
  for i in range(n) :
    result = max(result, graph[i].count(1))
  
  print(result)
  
solution(input_data)
