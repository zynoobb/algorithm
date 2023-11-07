import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  N,M = map(int, data.pop(0).split())
  matrix = [list(i) for i in data]
  print(bfs(matrix, N, M))
  
def bfs (matrix, N, M) : 
  location = None
  for i in range(N) : 
    for j in range(M) :
      if matrix[i][j] == 'I' : 
        location = [j,i]
        matrix[i][j] = '0'
      
  met = 0
  queue = deque([location])
  
  while queue :
    x,y = queue.popleft()
    direction = [[-1,0], [1,0], [0,-1], [0, 1]]
    for dx,dy in direction :
      nx, ny = x + dx, y + dy
      if verify(nx,ny,N,M) and not matrix[ny][nx] == 'X' and not matrix[ny][nx].isdigit() :
        if matrix[ny][nx] == 'P' : met += 1
        matrix[ny][nx] = str(met)
        queue.append([nx,ny])
  
  return met if met != 0 else 'TT'

def verify(x,y,N,M) :
  return 0 <= y < N and 0 <= x < M
  
solution(input_data)

