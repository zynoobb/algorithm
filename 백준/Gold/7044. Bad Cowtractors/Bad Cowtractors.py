import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [n,m], *edges = arr
  roots = {}
  for i in range(1,n+1) : roots[i] = i
    
  def find (node) :
    if node != roots[node] : 
      roots[node] = find(roots[node])
    return roots[node]

  def union(a,b) :
    a,b = find(a), find(b)
    if a < b : roots[b] = a
    else : roots[a] = b

  edges.sort(reverse=True, key=lambda x : x[2])
  
  result,line = 0,0
  opt = False
  
  for s,e,w in edges :
    if find(s) != find(e) :
      union(s,e)
      line += 1 
      result += w
    if line == n-1 :
      opt = True
      break
  
  print(result if opt else -1)
    
  
solution(input_data)