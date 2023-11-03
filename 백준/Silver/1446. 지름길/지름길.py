import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  _, D = arr.pop(0)
  graph = [[] for _ in range(D+1)]
  
  for i in range(D) :
    graph[i].append((i+1, 1))
    
  for [s,e,len] in arr :
    if e <= D : 
      graph[s].append((e,len))
  
  dijkstra(graph, D)
  
def dijkstra(graph, D) :
  distances = [10001 for _ in range(D+2)]
  distances[0] = 0
  heap = []
  heapq.heappush(heap, (0,0))
  
  while heap :
    cur_dist, cur_node = heapq.heappop(heap)
    if cur_dist > distances[cur_node] :
      continue
    
    for next_node, next_dist in graph[cur_node] :
      total_dist = cur_dist + next_dist
      
      if total_dist < distances[next_node] :
        distances[next_node] = total_dist
        heapq.heappush(heap, (total_dist, next_node))
  
  print(distances[D])

solution(input_data)