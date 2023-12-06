import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  n = int(data.pop(0))
  
  graph = [[] for _ in range(n+1)]
  
  for _str in data :
    [node, *lis] = list(map(int, _str.split()))[:-1]
    
    for i in range(0, len(lis), 2) :
      graph[node].append([lis[i+1], lis[i]])

  def BFS (node) : 
    visited = [-1 for _ in range(n+1)]
    visited[node] = 0
    queue = deque([])
    queue.append([0, node])
    _max = [0,0]
    
    while queue :
      dist, node = queue.popleft()
      for nextDist, nextNode in graph[node] :
        if visited[nextNode] == -1 :
          totalDist = nextDist + dist
          queue.append([totalDist, nextNode])
          visited[nextNode] = totalDist
          if totalDist > _max[1] :
            _max[0] = nextNode
            _max[1] = totalDist
            
    return _max
    
  
  leaf = BFS(1)
  result = BFS(leaf[0])[1]
  print(result)
    
solution(input_data)
