import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  _list = [list(map(int, v.split())) for v in data]
  n,m = _list.pop(0)
  arr, tc = _list[:m], _list[m+1:]
  
  graph = [[0] * n for _ in range(n)]
  
  for s,e in arr : 
    graph[s-1][e-1] = -1
    graph[e-1][s-1] = 1
    
  floyd(graph, n)
  result = [graph[a-1][b-1] for a,b in tc]
    
  print('\n'.join(map(str, result)))

def floyd (graph,n) : 
  for k in range(n) :
    for i in range(n) : 
      for j in range(n) :
        if graph[i][k] == -1 and graph[k][j] == -1 :
          graph[i][j] = -1
        if graph[i][k] == 1 and graph[k][j] == 1 :
          graph[i][j] = 1

solution(input_data)
