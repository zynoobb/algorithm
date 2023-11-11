import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,_ = arr.pop(0)
  
  graph = [['?'] * n for _ in range(n)]
  for i in range(n) : graph[i][i] = 'Self'
  
  for w,l in arr :
    graph[w-1][l-1] = 'Upper'
    graph[l-1][w-1] = 'Lower'
  
  for i in range(n) : 
    for j in range(n) : 
      for k in range(n) : 
        if graph[j][i] == 'Upper' and graph[i][k] == 'Upper' :
          graph[j][k] = 'Upper'
        elif graph[j][i] == 'Lower' and graph[i][k] == 'Lower' :
          graph[j][k] = 'Lower'
          
  result = 0
  for i in range(n) :
    if '?' not in graph[i] : result += 1
  
  print(result)
  
solution(input_data)
