import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

from collections import deque

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  N,M,K,X = arr.pop(0)
  
  graph = [[] for _ in range(N+1)]
  for [x,y] in arr :
    graph[x].append(y)
  
  result = BFS(graph,X,K)
  print('\n'.join(map(str, result)))

def BFS (graph, startNode, targetDist) :
  visited = [False for _ in range(len(graph))]
  queue = deque([[startNode, 0]])
  min_length = []
  
  while queue :
    [node, dist] = queue.popleft()
    if visited[node] : continue
    if dist == targetDist : min_length.append(node)
    if dist > targetDist : break
    visited[node] = True
    for next in graph[node] :
      if not visited[next] :
        queue.append([next, dist + 1])        

  if min_length : 
    min_length.sort()
    return min_length
  else : return [-1]
    
solution(input_data)