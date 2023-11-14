import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  arr = [list(map(int, x.split())) for x in data]
  [n], friends, [m] = arr[:3]
  
  graph = [[] * (n+1) for _ in range(n+1)]
  
  for s,e,w in arr[3:] :
    graph[s].append((w,e))
    graph[e].append((w,s))
  
  distances = []
  for v in friends :
    distances.append(dijkstra(graph, v))
  
  max = 0
  result = None
  a,b,c = distances
  for i in range(n) :
    temp = [a[i], b[i], c[i]]
    if min(temp) > 0 and min(temp) > max :
      max = min(temp)
      result = i + 1
  
  print(result)
      
def dijkstra (graph, start) :
  dp = [float('inf')] * (len(graph))
  dp[start] = 0
  pq = []
  heapq.heappush(pq, (0,start))
  
  while pq :
    dist, node = heapq.heappop(pq)
    if dist > dp[node] : continue
    
    for n_dist, n_node in graph[node] :
      total_dist = n_dist + dist
      if dp[n_node] > total_dist :
        dp[n_node] = total_dist
        heapq.heappush(pq, (total_dist, n_node))
  
  return dp[1:]
    
solution(input_data)