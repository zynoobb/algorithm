import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  [n], arr, [start] = [list(map(int, x.split())) for x in data]
  visited = [0] * n
  
  queue = deque([start - 1])
  
  while queue : 
    node = queue.popleft()
    visited[node] = True
    
    nextNode = [node + arr[node], node - arr[node]]
    
    for v in nextNode :
      if 0 <= v < n and not visited[v] :
        queue.append(v)

  print(visited.count(1))
    
solution(input_data)