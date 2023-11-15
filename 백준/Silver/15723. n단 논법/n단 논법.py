import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  idx = None
  for i in range(1 ,len(data)) :
    if data[i].isdigit() : 
      idx = i
      break
  arr, tc = data[1:idx], data[idx+1:]
  
  graph = [[0] * 26 for _ in range(26)]
  for i in range(26) : graph[i][i] = True
  
  for v in arr :
    a,b = list(map(lambda x : ord(x) - 97, v.split(' is ')))
    graph[a][b] = 1
  
  for k in range(26) :
    for i in range(26) :
      for j in range(26) :
        if graph[i][k] and graph[k][j] :
          graph[i][j] = 1
          
  result = []
  for v in tc :
    a,b = list(map(lambda x : ord(x) - 97, v.split(' is ')))
    result.append('T' if graph[a][b] else 'F')
  
  print('\n'.join(result))
    
solution(input_data)