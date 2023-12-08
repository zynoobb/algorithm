import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
sys.setrecursionlimit(150000)

def solution (data) :
  n,r,q = list(map(int, data.pop(0).split()))
  edges = [list(map(int, v.split())) for v in data[:-q]]
  queries = [int(v) for v in data[-q:]]
  
  trees = [[] for _ in range(n+1)]
  for s,e in edges :
    trees[s].append(e)
    trees[e].append(s)
    
  visited = [0 for _ in range(n+1)]

  def DFS (node) :
    visited[node] += 1 
    for next in trees[node] :
     if not visited[next] :
        visited[node] += DFS(next)  
    return visited[node]
  
  DFS(r)
  
  result = list(map(lambda x : visited[x],queries))
  print('\n'.join(map(str, result)))
  
solution(input_data)
