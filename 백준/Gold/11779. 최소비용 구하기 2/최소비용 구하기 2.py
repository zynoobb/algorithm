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
  print('\n'.join(result))

def dijkstra(graph, start, end) :
  distances = [float('inf') for _ in range(len(graph))]
  distances[start] = 0
  prev = [-1 for _ in range(len(graph))]
  H = []
  heapq.heappush(H, (start, 0))

  while H :
    cur_city, cur_cost = heapq.heappop(H)
    if cur_cost > distances[cur_city] : 
      continue

    for (next_city, next_cost) in graph[cur_city] :
      sum_cost = cur_cost + next_cost
      if distances[next_city] > sum_cost :
        distances[next_city] = sum_cost
        heapq.heappush(H, (next_city, sum_cost))
        prev[next_city] = cur_city

  routes = [end]
  pre_node = end
  while prev[pre_node] != -1 :
    routes.append(prev[pre_node])
    pre_node = prev[pre_node]
    
  routes.reverse()

  return [str(distances[end]), str(len(routes)), ' '.join(map(str, routes))]

solution(input_data)