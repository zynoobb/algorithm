import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  lis = [list(map(int, v.split())) for v in data]
  testCase = []
  temp = []

  for i in range(len(lis)) :
    if lis[i][0] == 0 and lis[i][1] == 0 : break
    temp.append(lis[i])
    if len(lis[i+1]) == 2 :
      testCase.append(temp)
      temp = []
  
  result = list(map(lambda x : kruskal(x), testCase))
  print('\n'.join(result))
  
  
def kruskal (case) :
  arr = []
  n,_ = case.pop(0)
  for a,b,c in case :
    if a > b : a,b = b,a
    arr.append([a+1,b+1,c])

  roots = {}
  for i in range(1,n+1) :
    roots[i] = i
    
  def find (node) :
    if node != roots[node] : 
      roots[node] = find(roots[node])
    return roots[node]
  
  def union (node1, node2) :
    root1, root2 = find(node1), find(node2)
    roots[root2] = root1
  
  costs = 0
  arr.sort(key= lambda x : x[2])
  
  for v in arr :
    s,e,w = v
    if find(s) == find(e) : costs += w
    else : union(s,e)
  
  return str(costs)
  
solution(input_data)
