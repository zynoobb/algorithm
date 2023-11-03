import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  [N], _, [start,end] = arr.pop(0),arr.pop(0),arr.pop()

  graph = [[] for _ in range(N+1)]
  for s,e,c in arr :
    graph[s].append((e,c))

  result = dijkstra(graph, start, end)
  print(result)
  
def dijkstra(graph, start, end) :
  distances = [float('inf') for _ in range(len(graph))]
  distances[start] = 0
  queue = []
  heapq.heappush(queue, (start, 0))

  while queue :
    cur_city, cur_cost = heapq.heappop(queue)
    if cur_cost > distances[cur_city] : 
      continue
    
    for (next_city, next_cost) in graph[cur_city] :
      sum_cost = cur_cost + next_cost
      if distances[next_city] > sum_cost :
        distances[next_city] = sum_cost
        heapq.heappush(queue, (next_city, sum_cost))
        
  return distances[end]
      
solution(input_data)