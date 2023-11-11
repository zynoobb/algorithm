import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,_ = arr.pop(0)
  
  graph = [[float('inf')] * n for _ in range(n)]
  
  for s,e,w in arr :
    graph[s-1][e-1] = w
  
  for i in range(n) : 
    for j in range(n) : 
      for k in range(n) : 
        graph[j][k] = min(graph[j][k], graph[j][i] + graph[i][k])
  
  result = float('inf')
  for i in range(n) : 
    result = min(result, graph[i][i])
    
  print(result if result != float('inf') else -1)
  
solution(input_data)
