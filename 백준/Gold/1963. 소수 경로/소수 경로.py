import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  data.pop(0)
  arr = makingPrime()
  result = list(map(lambda x : BFS(arr, x), data))
  print('\n'.join(result))
  
def makingPrime () :
  n = 10001
  isPrimes = [True for _ in range(n)]
  isPrimes[0] = isPrimes[1] = False
  arr = []
  for i in range(2, n) :
    if isPrimes[i] :
      j = 2
      if i > 1000 : arr.append(i)
      while i*j < n : 
        isPrimes[i*j] = False
        j += 1 
    
  return arr

def BFS (arr, _str) : 
  a,b = list(map(int, _str.split()))
  queue = deque()
  queue.append([a,1])
  visited = {}
  visited[a] = 1
  
  while queue : 
    [node, dist] = queue.popleft()
    if node == b : return str(dist - 1)
    
    for v in arr :
      if not visited.get(v, None) :
        dif = 0
        for i in range(4) :
          if str(node)[i] != str(v)[i] : dif += 1
        if dif == 1 : 
          visited[v] = dist + 1
          queue.append([v,dist+1])

  return 'Impossible'

solution(input_data)