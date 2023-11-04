import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()
import heapq

def solution (data) :
  N,K = map(int, data.split())
  
  result = dijkstra(N,K) 
  print(result)
  
def dijkstra(N,K) :
  distances = {}
  distances[N] = 0
  H = []
  heapq.heappush(H, (0, N))
  
  while H :
    cur_times, cur_node = heapq.heappop(H)
    if cur_node == K : return cur_times
    
    recursive(cur_node,cur_times,distances,H,K)
    
    for next_node in [cur_node - 1, cur_node + 1] : 
      if next_node == K : return cur_times + 1
      
      if 100000 >= next_node >= 0 and distances.get(next_node, float('inf')) > cur_times :
        distances[next_node] = cur_times + 1
        heapq.heappush(H, (cur_times + 1, next_node))  
    
def recursive (node,time,distances,H,K) :
  if node == K : 
    print(time)
    exit()
  if node >= 200000 or node == 0 : return
  else : 
    if distances.get(node, float('inf')) > time :
      distances[node] = time
      heapq.heappush(H, (time, node))
    return recursive(node * 2, time, distances, H, K)

solution(input_data)