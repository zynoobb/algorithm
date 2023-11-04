import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  N,_ = arr.pop(0)
  V1,V2 = arr.pop()
  
  graph = makingGraph(arr,N)
  result = findRoute(graph, V1, V2, N)
  print(result if result != float('inf') else -1)
      
def makingGraph (arr,N) :
  graph = [[] for _ in range(N + 1)]
  for start, end, _len in arr :
    graph[start].append([end, _len])
    graph[end].append([start, _len])
  return graph
    
def dijkstra(graph, node) :
  distances = [float('inf') for _ in range(len(graph))]
  distances[node] = 0
  
  H = []
  heapq.heappush(H, (node, 0))
  
  while H :
    cur_node, cur_length = heapq.heappop(H)
    if cur_length > distances[cur_node] :
      continue
    
    for next_node, next_length in graph[cur_node] :
      total_length = cur_length + next_length
      
      if distances[next_node] > total_length  :
        distances[next_node] = total_length
        heapq.heappush(H, (next_node, total_length))
        
  return distances
      
      
def findRoute (graph, V1, V2, N) :
  origin_dist = dijkstra(graph, 1)
  v1_dist = dijkstra(graph, V1)
  v2_dist = dijkstra(graph, V2)
  
  v1_path = origin_dist[V1] + v1_dist[V2] + v2_dist[N]
  v2_path = origin_dist[V2] + v2_dist[V1] + v1_dist[N]
  
  return min(v1_path, v2_path)

solution(input_data)