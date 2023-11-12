import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  data.pop(0)
  
  graph = [[float('inf')] * n for _ in range(n)]
  for i in range(n) : graph[i][i] = 0
  
  for v in data :
    a,b = map(int, v.split())
    graph[a-1][b-1] = 1
  
  for k in range(n) :
    for i in range(n) : 
      for j in range(n) :
        graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

  result = []
  for i in range(n) :
    count = 0
    for j in range(n) :
      if graph[i][j] != float('inf') or graph[j][i] != float('inf') :
        count += 1
    result.append(n - count)
  
  print('\n'.join(map(str, result)))
  
solution(input_data)
