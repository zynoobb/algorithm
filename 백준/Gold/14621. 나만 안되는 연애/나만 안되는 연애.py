import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  collage = data.pop(1).split()
  arr = [list(map(int, v.split())) for v in data]
  n,m = arr.pop(0)
  
  edges = []
  
  for s,e,w in arr :
    if collage[s-1] != collage[e-1] :
      edges.append([s,e,w])
  
  roots = {}
  for i in range(1, n+1) :
    roots[i] = i
  
  def find (node) :
    if roots[node] != node :
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (node1, node2) : 
    root1, root2 = find(node1) , find(node2)
    if node1 < node2 : roots[root2] = root1  
    else : roots[root1] = root2
  
  result,count = 0, 0
  edges.sort(key=lambda x : x[2])
  for s,e,w in edges :
    if find(s) != find(e) :
      result += w
      count += 1 
      union(s,e)
  
  print(result if count == n - 1 else -1)
    
solution(input_data)
