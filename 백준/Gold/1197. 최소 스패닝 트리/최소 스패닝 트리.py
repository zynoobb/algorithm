import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int,v.split())) for v in data]
  n,_ = arr.pop(0)
  
  root = {}
  for i in range(1, n+1) :
    root[i] = i 
  
  def find(v) :
    if root[v] == v : return v
    else : 
      root[v] = find(root[v])
      return root[v]
    
  def union(a,b) :
    x,y = find(a), find(b)
    root[y] = x

  total = 0
  arr.sort(key= lambda x : x[2])
  for s,e,w in arr : 
    
    if find(s) == find(e) : continue
    total += w
    union(s,e)
    
  print(total)
  
solution(input_data)
