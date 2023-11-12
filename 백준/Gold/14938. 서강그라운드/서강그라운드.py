import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,m,r = arr.pop(0)
  items = arr.pop(0)
  
  graph = [[float('inf')] * n for _ in range(n)]
  for i in range(n) : graph[i][i] = 0
  
  for s,e,w in arr : 
    graph[s-1][e-1] = w
    graph[e-1][s-1] = w
    
  for k in range(n) :
    for i in range(n) : 
      for j in range(n) :
        graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
  
  result = 0
  for i in range(n) : 
    temp = 0
    for j in range(n) :
      if m >= graph[i][j] : temp += items[j]
    result = max(result, temp)
  
  print(result)

solution(input_data)
