import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
sys.setrecursionlimit(150000)

def solution (data) :
  n = int(data.pop(0))
  graph = [[] for _ in range(n+1)]
  
  for v in data :
    a,b = map(int, v.split())
    graph[a].append(b)
    graph[b].append(a)
  
  depth = [0 for _ in range(n+1)]
  visited = [False for _ in range(n+1)]
  leafNodes = []
  
  def dfs (node) :
    visited[node] = True
    cnt = 0
    for next in graph[node] :
      if not visited[next] : 
        cnt += 1
        depth[next] = depth[node] + 1
        dfs(next)
    if cnt == 0 : 
      leafNodes.append(node)
      return
  
  dfs(1)
  
  result = 0
  for leaf in leafNodes :
    result += depth[leaf]
  
  print('No' if result % 2 == 0 else 'Yes')
  
  
solution(input_data)