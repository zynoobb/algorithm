import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
sys.setrecursionlimit(150000)

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  N,M = arr.pop(0)
  
  roots = {}
  for i in range(N+1) :
    roots[i+1] = i+1
    
  def find (n) :
    if n != roots[n] :
      roots[n] = find(roots[n])
    return roots[n]
  
  def union (x,y) :
    x,y = find(x),find(y)
    if x < y : roots[y] = x
    else : roots[x] = y
  
  result = []
  for order,a,b in arr :
    a,b = a+1, b+1
    if order == 0 : 
      union(a,b)
    else : 
      result.append('NO') if find(a) != find(b) else result.append('YES')
  
  print('\n'.join(result))

solution(input_data)