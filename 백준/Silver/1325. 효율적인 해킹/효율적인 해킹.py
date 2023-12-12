import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  edges = [list(map(int, v.split())) for v in data]
  n,m = edges.pop(0)
  
  graph = [[] for _ in range(n+1)]
  for e,s in edges :
    graph[s].append(e)
    
  def BFS(node) :
    queue = deque()
    queue.append(node)
    cnt = 0
    visited = [False for _ in range(n+1)]
    visited[node] = True
    
    while queue :
      node = queue.popleft()
      
      for next in graph[node] :
        if not visited[next] :
          visited[next] = True
          queue.append(next)
          cnt += 1
          
    return cnt
  
  _max = 0
  roots = [0 for _ in range(n+1)]  
  for i in range(1, n+1) :
    temp = BFS(i)
    _max = max(_max,temp)
    roots[i] = temp

  result = [i for i,v in enumerate(roots) if v == _max]
  print(*result)
  
solution(input_data)
