import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  temp = [list(map(int,v.split())) for v in data]
  n, _ = temp.pop(0)
  arr = [[v[0],v[1],v[2]] if v[0] < v[1] else [v[1],v[0],v[2]] for v in temp]
    
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
  
  costs = []
  for s,e,w in arr :
    if find(s) == find(e) : continue
    costs.append(w)
    union(s,e)
      
  print(sum(costs[:-1]))
  
solution(input_data)
