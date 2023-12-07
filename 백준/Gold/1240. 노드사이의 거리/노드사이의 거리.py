import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,m = arr.pop(0)
  edges, testCase = None, None
  for i in range(len(arr)) :
    if len(arr[i]) == 2 :
      edges = arr[:i]
      testCase = arr[i:]
      break

  trees = [[] for _ in range(n+1)]
  for s,e,w in edges :
    trees[s].append((e,w))
    trees[e].append((s,w))
    
  distTable = [None for _ in range(n+1)]
  for i in range(1, n+1) :
    distTable[i] = DFS(trees, i)
    
  result = list(map(lambda x : distTable[x[0]][x[1]], testCase))
  print('\n'.join(map(str, result)))
  
def DFS (trees, node) :
  dists = [-1 for _ in range(len(trees))]
  stack = [[node, 0]]
  
  while stack :
    node, dist = stack.pop()
    
    if dists[node] != -1 : continue
    dists[node] = dist
    
    for nextNode, nextDist in trees[node] :
      totalDist = nextDist + dist
      stack.append([nextNode, totalDist])

  return dists

solution(input_data)
