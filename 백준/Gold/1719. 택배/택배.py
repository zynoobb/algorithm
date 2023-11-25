import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from heapq import heappush, heappop

def solution (data) :
  arr = [list(map(int, x.split())) for x in data]
  n,m = arr.pop(0)
  graph = [[float('inf')] * n for _ in range(n)]
  dist = [['-'] * n for _ in range(n)]

  for i in range(n) :
    graph[i][i] = 0
  
  for s,e,w in arr :
    graph[s-1][e-1] = graph[e-1][s-1] = w
    dist[s-1][e-1] = str(e)
    dist[e-1][s-1] = str(s)
    
  for k in range(n) : 
    for i in range(n) : 
      for j in range(n) : 
        if graph[i][j] > graph[i][k] + graph[k][j] :
          graph[i][j] = graph[i][k] + graph[k][j]
          dist[i][j] = dist[i][k]
      
  print('\n'.join([' '.join(v) for v in dist]))

solution(input_data)