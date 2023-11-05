import heapq

def solution(n,s,a,b,fares):
  graph = [[] for _ in range(n + 1)]
  for [_from,_to,w] in fares :
    graph[_from].append((w,_to))
    graph[_to].append((w,_from))
  
  costs = [[]]
  for i in range(n) :
    costs.append(dijkstra(graph,i+1))

  result = float('inf')
  for i in range(n) :
    result = min(result, costs[s][i+1] + costs[i+1][a] + costs[i+1][b])
  
  return result

def dijkstra(graph, start) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[start] = 0
  pq = []
  heapq.heappush(pq, (0, start))  
  
  while pq :
    cur_wei, cur_node = heapq.heappop(pq)
    if cur_wei > dp[cur_node] : continue
    
    for next_wei, next_node in graph[cur_node] :
      total_wei = cur_wei + next_wei
      if dp[next_node] > total_wei :
        dp[next_node] = total_wei
        heapq.heappush(pq, (total_wei, next_node))
  
  return dp
  