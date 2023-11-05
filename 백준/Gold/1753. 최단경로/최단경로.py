import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  arr = list(map(lambda x : list(map(int,x.split())), data))
  [N,_],[startNode] = arr.pop(0), arr.pop(0)
  
  graph = [[] for _ in range(N + 1)]
  for s,e,u in arr :
    graph[s].append([u,e])
  
  result = dijkstra(graph, startNode)
  print('\n'.join(result))
  
def dijkstra(graph, startNode) :
  distances = [float('inf') for _ in range(len(graph))]
  distances[startNode] = 0
  
  pq = []
  heapq.heappush(pq, (0, startNode))
  while pq :
    cur_weight, cur_node = heapq.heappop(pq)
    if cur_weight > distances[cur_node] :
      continue
    
    for [next_weight, next_node] in graph[cur_node] :
      sum_weight = next_weight + cur_weight
      if distances[next_node] > sum_weight : 
        distances[next_node] = sum_weight
        heapq.heappush(pq, (sum_weight, next_node))
  
  arr = list(map(lambda x : str(x) if x != float('inf') else 'INF', distances))
  return arr[1:]

solution(input_data)