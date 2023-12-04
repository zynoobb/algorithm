import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  temp = [list(map(int, v.split())) for v in data]
  arr = [[] for _ in range(3)]
  roots = {}
  for i in range(n) :
    roots[i+1] = i+1 
    for j in range(3) :
      arr[j].append((temp[i][j], i+1))
  
  edges = []    
  for i in range(3) : 
    arr[i].sort()
    for j in range(1, n) :
      w1,n1 = arr[i][j-1]
      w2,n2 = arr[i][j]
      edges.append([n1, n2, abs(w1-w2)])
  edges.sort(key=lambda x : x[2])

  def find (node) :
    if roots[node] != node :
      roots[node] = find(roots[node])
    return roots[node]

  def union (node1, node2) :
    root1, root2 = find(node1), find(node2)
    if node1 < node2 : roots[root2] = root1
    else : roots[root1] = root2
    
  idx = result = 0
  cur = 1
  while cur < n :
    s,e,w = edges[idx]
    if find(s) != find(e) :
      result += w
      union(s,e)
      cur += 1
    idx += 1
    
  print(result)
      
solution(input_data)
