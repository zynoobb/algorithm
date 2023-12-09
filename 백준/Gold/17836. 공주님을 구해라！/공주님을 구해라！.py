import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  n,m,t = arr.pop(0)

  gram = None
  for i in range(n) : 
    for j in range(m) :
      if arr[i][j] == 2 : gram = [j,i]

  transitToGram = BFS(arr, gram, n, m) + (n-1-gram[1]) + (m-1-gram[0])
  routeToPrincess = BFS(arr,[m-1,n-1], n, m)
  
  result = min(transitToGram, routeToPrincess)
  print(result if t >= result else 'Fail')

def BFS(matrix, target, Y,X) :
  visited = [[0 for _ in range(X)] for _ in range(Y)]
  queue = deque()
  queue.append([0,0,1])
  tx, ty = target

  directions = [[0,1],[0,-1],[1,0],[-1,0]]
  while queue :
    x,y,dist = queue.popleft()
    if visited[y][x] : continue
    visited[y][x] = dist
    for dx,dy in directions :
      nx,ny = dx + x, dy + y
      if nx == tx and ny == ty : return dist
      if verify(X,Y,nx,ny) and not visited[ny][nx] and matrix[ny][nx] != 1 :
        queue.append([nx,ny,dist+1])
    
  return float('inf')

def verify (X,Y,x,y) :
  return 0 <= x < X and 0 <= y < Y
  
solution(input_data)
