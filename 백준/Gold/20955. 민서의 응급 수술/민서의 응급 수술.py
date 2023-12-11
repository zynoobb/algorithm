import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  edges = [list(map(int, v.split())) for v in data]
  n,m = edges.pop(0)
  roots = {}
  for i in range(1, n+1) : 
    roots[i] = i
  
  def find (node) :
    if node != roots[node] :
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (a, b) : 
    a,b = find(a), find(b)
    if b > a : roots[b] = a
    else : roots[a] = b
  
  count = 0
  for s,e in edges :
    if find(s) == find(e) : count += 1
    union(s,e)
    
  for i in range(1,n) : 
    if find(i) != find(i+1) : 
      union(i,i+1)
      count += 1 
      
  print(count)
    
solution(input_data)
