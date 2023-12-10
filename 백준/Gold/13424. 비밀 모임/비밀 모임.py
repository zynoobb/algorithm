import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  arr = [list(map(int, v.split())) for v in data]
  
  testCase = []
  for i in range(1, len(arr)) : 
    if len(arr[i-1]) == 2 and len(arr[i]) == 3 :
      _, m = arr[i-1]
      testCase.append(arr[i-1:i+m+2])
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(map(str, result)))
  
def act (cases) : 
  n,m = cases.pop(0)
  edges = cases[:m]
  friends = cases.pop()
  
  graph = [[float('inf') for _ in range(n)] for _ in range(n)]
  for i in range(n) :
    graph[i][i] = 0
    
  for s,e,w in edges :
    graph[s-1][e-1] = w
    graph[e-1][s-1] = w
  
  for k in range(n) :
    for i in range(n) :
      for j in range(n) :
        graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
  
  dists = [0 for _ in range(n)]
  
  for i in range(n) :
    for j in friends :
      dists[i] += graph[i][j-1]
  
  minv = min(dists)
  return dists.index(minv) + 1

solution(input_data)
