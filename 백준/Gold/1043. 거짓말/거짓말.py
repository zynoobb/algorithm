import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [n,m], knowns, *groups = arr
  knowns = knowns[1:]
  roots = {}
  for i in range(n+1) : roots[i] = i
  for known in knowns : roots[known] = 0
    
  def find (node) :
    if node != roots[node] : 
      roots[node] = find(roots[node])
    return roots[node]

  def union(a,b) :
    a,b = find(a), find(b)
    if a == b  : return
    
    if a < b : roots[b] = a
    else : roots[a] = b

  for i in range(m) :
    group = groups[i][1:]
    for j in range(len(group) - 1) :
      union(group[j], group[j+1])
    
  result = m
  for group in groups : 
    for v in group[1:] : 
      if find(v) == 0 : 
        result -= 1
        break

  print(result)
    
solution(input_data)