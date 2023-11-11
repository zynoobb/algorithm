import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  cities = int(data.pop(0))
  data.pop(0)
  
  arr = [list(map(int, v.split())) for v in data]
  graph = [[float('inf')] * cities for _ in range(cities)]
  
  for i in range(cities) :
    graph[i][i] = 0
  
  for s,e,w in arr : 
    graph[s-1][e-1] = min(graph[s-1][e-1], w)
    
  for i in range(cities) :
    for j in range(cities) :
      for k in range(cities) :
        graph[j][k] = min(graph[j][k], graph[j][i] + graph[i][k])
  
  print('\n'.join(map(lambda x : ' '.join(map(lambda y : str(y) if y != float('inf') else '0', x)), graph)))
  
solution(input_data)
