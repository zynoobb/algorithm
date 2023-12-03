import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,_,_ = arr.pop(0)
  powers = arr.pop(0)
  
  roots = {}
  for i in range(n+1) :
    roots[i] = 0 if i in powers else i
  
  def find (node) :
    if roots[node] != node :
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (node1, node2) : 
    root1, root2 = find(node1) , find(node2)
    if node1 < node2 : roots[root2] = root1  
    else : roots[root1] = root2
  
  result = 0
  arr.sort(key=lambda x : x[2])
  for s,e,w in arr :
    if find(s) != find(e) :
      result += w
      union(s,e)
  
  print(result)
    
solution(input_data)
