import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  edges = []
  for i in range(n) :
    temp = list(map(int ,data[i].split()))
    for j in range(n) : 
      if i != j : 
        edges.append([i+1, j+1, temp[j]])
        
  edges.sort(key=lambda x : x[2])
  
  roots = {}
  for i in range(1, n+1) :
    roots[i] = i
  
  def find (node) :
    if roots[node] != node :
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (node1, node2) : 
    root1, root2 = find(node1) , find(node2)
    roots[root2] = root1
  
  result = 0
  for s,e,w in edges :
    if find(s) != find(e) :
      result += w
      union(s,e)
  
  print(result)
  
  
solution(input_data)
