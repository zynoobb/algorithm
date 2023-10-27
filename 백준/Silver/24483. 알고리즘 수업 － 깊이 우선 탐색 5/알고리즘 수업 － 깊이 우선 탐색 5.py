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
    distances = {}
    visited = {}
    visitedIdx = 1
    stack = deque([[startNode, 1]])
    while len(stack) :
      [node,dis] = stack.pop()
      if not distances.get(node, None) :
        visited[node] = visitedIdx
        visitedIdx += 1 
        distances[node] = dis
        graph[node].sort(reverse=True)
        for next in graph[node] :
          if not distances.get(next,None) :
            stack.append([next,dis + 1])
      
    _sum = 0
    for i in range(1, N + 1) :
      _sum += visited.get(i, 0) * (distances.get(i, 0) - 1)
      
    return _sum
    
  result = DFS(R)
  print(result)
      
solution(input_data)

