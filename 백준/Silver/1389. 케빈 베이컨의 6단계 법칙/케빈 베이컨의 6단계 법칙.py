import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  n,m = arr.pop(0)
  
  graph = [[] for _ in range(n+1)]

  for _from, _to in arr :
    graph[_from].append((1, _to))
    graph[_to].append((1, _from))
  
  result, storage = float('inf'), float('inf')
  
  for i in range(n) :
    bacon = dijkstra(graph,i+1)
    if storage > bacon :
       storage = bacon
       result = i + 1

  print(result)

def dijkstra (graph, start) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[start] = 0
  pq = []
  heapq.heappush(pq, (dp[start],start))
  
  while pq :
    cur_dist, cur_node = heapq.heappop(pq)
    if cur_dist > dp[cur_node] : continue
    
    for next_dist, next_node in graph[cur_node] :
      total_dist = next_dist + cur_dist
      if dp[next_node] > total_dist :
        dp[next_node] = total_dist
        heapq.heappush(pq, (total_dist, next_node))
   
  return sum(dp[1:])
  
solution(input_data)