import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  _list = [list(map(int, v.split())) for v in data]
  n,_ = _list.pop(0)
  graph, tc = _list[:n], _list[n:]

  floyd(graph,n)
  
  result = list(map(lambda x : 'Enjoy other party' if x[2] >= graph[x[0] -1][x[1] -1] else 'Stay here', tc))
  print('\n'.join(result))

def floyd (graph,n) : 
  for k in range(n) :
    for i in range(n) :
      for j in range(n) :
        graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

solution(input_data)
