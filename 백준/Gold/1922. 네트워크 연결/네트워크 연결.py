import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  m = int(data.pop(0))
  arr = [list(map(int,v.split())) for v in data]
  
  roots = {}
  for i in range(1,n+1) :
    roots[i] = i
    
  def find (node) :
    if roots[node] == node : 
      return node
    else : 
      roots[node] = find(roots[node])
      return roots[node]

  def union (a,b) :
    x,y = find(a), find(b)
    roots[y] = x
  
  arr.sort(key=lambda x : x[2])
  
  costs = 0
  for s,e,w in arr :
    if find(s) == find(e) : continue
    costs += w
    union(s,e)
      
  print(costs)
  
solution(input_data)
