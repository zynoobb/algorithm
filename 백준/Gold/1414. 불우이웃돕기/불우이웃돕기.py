import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  arr = []
  result = 0

  for i in range(n) : 
    for j in range(n) : 
      v,w = data[i][j], None
      if v == '0' : continue
      elif 97 <= ord(v) <= 122 : w = ord(v) - 96
      else : w = ord(v) - 38
      
      if i == j : result += w
      else : arr.append([i+1, j+1, w])
  
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
  
  count = 1
  arr.sort(key=lambda x : x[2])
  for s,e,w in arr :
    if find(s) != find(e) : 
      union(s,e)
      count += 1
    else : result += w
  
  print(result if count == n else -1)
    
solution(input_data)
