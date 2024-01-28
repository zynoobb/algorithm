import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

sys.setrecursionlimit(150000)

def solution (data) :
  data.pop(0)
  
  testCase = [number for index, number in enumerate(data) if index % 2 == 1]
  result = list(map(lambda x : act(x), testCase))
  
  print('\n'.join(result))
  

def act (_str) :
  arr = list(map(int, _str.split(' ')))
  N = len(arr)
  arr.insert(0,0)
  visited = [False for _ in range(N+1)]
  storage = []
  
  def DFS (cycle, cnt) :
    nonlocal storage
    visited[cnt] = True
    next = arr[cnt]
    cycle.append(cnt)
    
    if visited[next] :
      if next in cycle :
        storage += cycle[cycle.index(next):] 
    else : DFS(cycle, next)
    
  for i in range(1, N+1) :
    if not visited[i] :
      DFS([], i)
      
  return str(N - len(storage))
  

solution(input_data)
