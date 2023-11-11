import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  graph = [list(x.split()) for x in data]
  
  for i in range(n) : 
    for j in range(n) : 
      for k in range(n) :
        if graph[j][i] == '1' and graph[i][k] == '1':
          graph[j][k] = '1'
  
  print('\n'.join(map(lambda x : ' '.join(x) ,graph)))
        
solution(input_data)
