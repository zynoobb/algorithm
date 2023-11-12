import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  arr = [list(map(int, x.split())) for x in data]
  n,m,x = arr.pop(0)
  
  graph = [[] for _ in range(n+1)]
  reverseGraph = [[] for _ in range(n+1)]
  for s,e,w in arr : 
    graph[s].append((w,e))
    reverseGraph[e].append((w,s))
  
  dp = dijkstra(graph, x)
  reverseDp = dijkstra(reverseGraph, x)
  result = 0
  for i in range(n) :
    result = max(result, dp[i] + reverseDp[i])

  print(result)

def dijkstra (graph,start) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[start] = 0
  pq = []
  heapq.heappush(pq, (dp[start], start))
  
  while pq :
    wei, node = heapq.heappop(pq)
    if wei > dp[node] : continue
    
    for n_wei, n_node in graph[node] :
      total_wei = wei + n_wei
      if dp[n_node] > total_wei :
        dp[n_node] = total_wei
        heapq.heappush(pq, (total_wei, n_node))
  
  return dp[1:]

solution(input_data)
