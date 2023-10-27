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

  def DFS (startNode) :
    visited = {}
    stack = deque([startNode])
    idx = 1
    while len(stack) :
      node = stack.pop()
      if not visited.get(node, None) :
        visited[node] = idx
        idx += 1
        graph[node].sort()
        for next in graph[node] :
          if not visited.get(next,None) :
            stack.append(next)

    matrix = [0 for _ in range(N)]
    for (k,v) in visited.items() :
      matrix[k-1] = v
    
    return matrix
    
  result = DFS(R)
  print('\n'.join(map(str, result)))
      
solution(input_data)

