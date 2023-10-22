import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [n,m], *arr = map(lambda x : list(map(int,x.split())),data)
  graph = [[] for _ in range(n+1)]
  
  for i in range(m) :
    to, go = arr[i]
    graph[to].append(go)
    graph[go].append(to)
  
  result = BFS(graph, 1, m+1)
  print(result)
    
def BFS (graph, startNode, maxLength) :
  visited = [False for _ in range(len(graph))]
  arr = [maxLength for _ in range(len(graph))]
  queue = [[startNode,0]]
  
  while len(queue) :
    node, distance = queue.pop(0)
    if arr[node] > distance :
      arr[node] = distance
    if not visited[node] :
      visited[node] = True
      for nextNode in graph[node] :
        if not visited[nextNode] : 
          queue.append([nextNode, distance + 1])
          
  arr.pop(0)
  _maxDistance = max(arr)
  _maxIdx = arr.index(_maxDistance) + 1
  _maxCount = arr.count(_maxDistance)
  return '{} {} {}'.format(_maxIdx, _maxDistance, _maxCount)
  
solution(input_data)