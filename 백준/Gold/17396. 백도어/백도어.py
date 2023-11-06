import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  n,_ = arr.pop(0)
  visions = arr.pop(0)
  visions[n-1] = 0
  graph = [[] for _ in range(n)]

  for _from, _to, _time in arr :    
    graph[_from].append((_time, _to))
    graph[_to].append((_time, _from))
    
  result = dijkstra(graph, visions)
  print(result)

def dijkstra (graph, visions) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[0] = 0
  pq = []
  heapq.heappush(pq, (0,0))
  
  while pq :
    cur_time, cur_node = heapq.heappop(pq)
    if cur_time > dp[cur_node] or visions[cur_node] : continue
    
    for next_time, next_node in graph[cur_node] :
      total_time = next_time + cur_time
      if dp[next_node] > total_time :
        dp[next_node] = total_time
        heapq.heappush(pq, (total_time, next_node))
    
  return dp[-1] if dp[-1] != float('inf') else -1
  
solution(input_data)