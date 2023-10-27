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
    stack = deque([[startNode, 1]])
    while len(stack) :
      [node,dis] = stack.pop()
      if not distances.get(node, None) :
        distances[node] = dis
        graph[node].sort(reverse=True)
        for next in graph[node] :
          if not distances.get(next,None) :
            stack.append([next,dis + 1])

    matrix = [-1 for _ in range(N)]
    for (k,v) in distances.items() :
      matrix[k-1] = v-1
      
    return matrix
    
  result = DFS(R)
  print('\n'.join(map(str, result)))
      
solution(input_data)

