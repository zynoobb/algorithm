import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  matrix = list(map(lambda x : list(map(int, x.split())), data))
  n, _ = matrix.pop(0)
  
  graph = [[] for _ in range(n+1)]
  for [s,e,w] in matrix :
    graph[s].append((w,e))
    graph[e].append((w,s))
    
  print(dijkstra(graph))
  
def dijkstra (graph) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[1] = 0
  pq = []
  heapq.heappush(pq, (0,1))
  
  while pq :
    wei,node = heapq.heappop(pq)
    if wei > dp[node] : continue
    
    for n_wei, n_node in graph[node] :
      total_wei = wei + n_wei
      if dp[n_node] > total_wei :
        dp[n_node] = total_wei
        heapq.heappush(pq, (total_wei, n_node))
  
  return dp[-1]

solution(input_data)