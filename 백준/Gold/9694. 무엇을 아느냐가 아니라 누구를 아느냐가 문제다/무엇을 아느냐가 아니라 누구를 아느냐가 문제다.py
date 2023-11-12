import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  int(data.pop(0))
  arr = [list(map(int, x.split())) for x in data]
  
  tc = []
  j = 0
  for _ in range(len(arr)) : 
    if j > len(arr) - 1 : break
    a,_ = arr[j]
    tc.append(arr[j:j+a+1])
    j += (a + 1)
  
  
  result = list(map(lambda x : act(x[0],x[1]), enumerate(tc)))
  print('\n'.join(result))
  
  
def act(index, arr) :
  _,n = arr.pop(0)
  graph = [[] for _ in range(n)]
  path = [[] for _ in range(n)]
  for s,e,w in arr : 
    graph[s].append((w,e))
    graph[e].append((w,s))
  
  _txt = dijkstra(graph, path)
  return f'Case #{index+1}: {_txt}'
  
def dijkstra (graph, path) :
  dp = [float('inf') for _ in range(len(graph))]
  dp[0] = 0
  pq = []
  path[0] = [0]
  heapq.heappush(pq, (0, 0))
  
  while pq :
    wei, node = heapq.heappop(pq)
    if wei > dp[node] : continue
    
    for n_wei, n_node in graph[node] :
      total_wei = wei + n_wei
      if dp[n_node] > total_wei :
        dp[n_node] = total_wei
        path[n_node] = path[node] + [n_node]
        heapq.heappush(pq, (total_wei, n_node))

  return ' '.join(map(str, path[-1])) if path[-1] else '-1'

solution(input_data)
