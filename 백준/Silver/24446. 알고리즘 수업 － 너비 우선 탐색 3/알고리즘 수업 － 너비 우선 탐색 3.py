import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  N,M,R = map(int,data.pop(0).split())
  arr = list(map(lambda x : list(map(int, x.split())), data))
  graph = [[] for _ in range(N+1)]

  for [to,go] in arr :
    graph[to].append(go)
    graph[go].append(to)

  def BFS (startNode) :
    _distances = {}
    queue = deque([[startNode, 1]])
    while len(queue) :
      [node,dis] = queue.popleft()
      if not _distances.get(node, None) :
        _distances[node] = dis 
        graph[node].sort()
        for next in graph[node] :
          if not _distances.get(next, None) : 
            queue.append([next, dis + 1])
            
    matrix = [-1 for _ in range(N)]
    for (k,v) in _distances.items() :
      matrix[k-1] = v - 1
    
    return matrix
  
  result = BFS(R)
  print('\n'.join(map(str, result)))

solution(input_data)