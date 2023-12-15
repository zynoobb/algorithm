import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  data.pop(0)
  arr = [list(map(int, v.split())) for v in data]
  routes = arr.pop()
  
  roots = {}
  for i in range(1,n+1) :
    roots[i] = i
    
  def find (node) :
    if node != roots[node] :
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (a,b) :
    a,b, = find(a), find(b)
    if a < b : roots[b] = a
    else : roots[a] = b
    
  for i in range(n) :
    for j in range(n) :
      if arr[i][j] == 1 :
        union(i+1,j+1)
        
  start = find(routes[0])
  result = 'YES'
  for v in routes :
    if find(v) != start : 
      result = 'NO'
      break
  
  print(result)
  
solution(input_data)