from heapq import heappush, heappop

def solution(N, road, K):
  graph = [[] for _ in range(N+1)]

  for s,e,w in road :
    graph[s].append((w,e))
    graph[e].append((w,s))
  
  result = dijkstra(graph, 1, K)
  return result
  
def dijkstra (graph, startNode, K) : 
  dp = [float('inf')] * (len(graph))
  dp[startNode] = 0
  
  pq = [[0, startNode]]
  while pq :
    dist, node = heappop(pq)
    if dp[node] > dist : continue
    
    for nDist, nNode in graph[node] :
      totalDist = dist + nDist
      if totalDist > K : continue
      if dp[nNode] > totalDist :
        dp[nNode] = totalDist
        heappush(pq, [totalDist, nNode])
    
  return len([v for v in dp if K >= v])
  