import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  arr = [list(map(int, x.split())) for x in data]
  n,_,p = arr.pop(0)
  graph = [[] for _ in range(n+1)]
  for s,e,c in arr :
    graph[s].append((c,e))
    graph[e].append((c,s))
    
  route1 = dijkstra(graph,1)
  route2 = dijkstra(graph,p)

  print('SAVE HIM' if route1[n] >= route1[p] + route2[n] else 'GOOD BYE')
  
def dijkstra (graph, start) :
  distances = [float('inf') for _ in range(len(graph))]
  distances[start] = 0
  
  pq = []
  heapq.heappush(pq, (0,start))
  
  while pq :
    dist, node = heapq.heappop(pq)
    if dist > distances[node] : continue

    for next_dist, next in graph[node] :
      sum_dist = next_dist + dist
      if distances[next] > sum_dist : 
        distances[next] = sum_dist
        heapq.heappush(pq, (sum_dist, next))
  
  return distances
  
solution(input_data)