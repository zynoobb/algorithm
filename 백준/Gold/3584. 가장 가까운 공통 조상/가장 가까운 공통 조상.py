import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  
  testCase = []
  for i, v in enumerate(data) :
    if v.isdigit() : testCase.append(data[i:i+int(v)+1])
    
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(map(str, result)))

def act(case) :
  n = int(case.pop(0))
  arr = [list(map(int, v.split())) for v in case]
  a,b = arr.pop()

  trees = [[] for _ in range(n+1)]
  for s,e in arr :
    trees[e].append(s)

  aList = DFS(trees, a)
  bList = DFS(trees, b)
  minLength = len(aList) if len(bList) > len(aList) else len(bList)
  
  minRoot = aList[0]
  for i in range(minLength) :
    if aList[i] == bList[i] : minRoot = aList[i]
    else : break
    
  return minRoot

def DFS(trees, node) :
  order = [node]
  orderIdx = 0
  
  while orderIdx < len(order) :
    node = order[orderIdx]    
    if not trees[node] : break
    order.append(trees[node][0])
    orderIdx += 1
    
  return list(reversed(order))
    
solution(input_data)
