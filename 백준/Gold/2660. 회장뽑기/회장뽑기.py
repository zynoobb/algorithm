import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  graph = [[float('inf')] * n for _ in range(n)]
  
  for i in range(n) : graph[i][i] = 0
  
  for v in data :
    a,b = map(int, v.split())
    if a == -1 and b == -1 : break
    graph[a-1][b-1] = 1
    graph[b-1][a-1] = 1
  
  
  for k in range(n) :
    for i in range(n) : 
      for j in range(n) :
        if graph[i][j] == 1 or graph[i][j] == 0 : continue
        graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

  points = list(map(lambda x : max(x), graph))
  _min = min(points)
  counts = points.count(_min)
  result = [idx + 1 for idx, point in enumerate(points) if point == _min]
  
  print(_min, counts)
  print(*result)
  
solution(input_data)
