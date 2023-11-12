import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,_ = map(int, data.pop(0).split())
  
  graph = [['?'] * n for _ in range(n)]
  for i in range(n) : graph[i][i] = 'self'
  
  for v in data :
    a,b = map(int, v.split())
    graph[a-1][b-1] = 'up'
    graph[b-1][a-1] = 'low'
  
  for k in range(n) :
    for i in range(n) : 
      for j in range(n) :
        if graph[i][j] == 'up' or (graph[i][k] == 'up' and graph[k][j] == 'up') :
          graph[i][j] = 'up'
        elif graph[i][j] == 'low' or (graph[i][k] == 'low' and graph[k][j] == 'low') :
          graph[i][j] = 'low'

  result = 0
  for i in range(n) :
    upper_case = graph[i].count('up')
    lower_case = graph[i].count('low')
    if upper_case > n // 2 or lower_case > n // 2 : 
      result += 1
        
  print(result)
  
solution(input_data)
