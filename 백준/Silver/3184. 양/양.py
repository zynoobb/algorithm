import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque


def solution (data) :
  Y,X = map(int, data.pop(0).split())
  matrix = data
  visited = [[False for _ in range(X)] for _ in range(Y)]

  wolves = 0
  sheep = 0
  
  def BFS (x,y) :
    nonlocal sheep, wolves
    o, v = 0, 0
    visited[y][x] = True
        
    queue = deque()
    queue.append([x,y])
    
    directions = [[0,-1],[0,1],[1,0],[-1,0]]
    while queue :
      x,y = queue.pop()
      if matrix[y][x] == 'v' : v += 1
      elif matrix[y][x] == 'o' : o += 1 
      
      for dx,dy in directions :
        nx,ny = dx+x, dy+y
        if 0 <= nx < X and 0 <= ny < Y and not visited[ny][nx] and matrix[ny][nx] != '#' :
          visited[ny][nx] = True
          queue.append([nx,ny])
    
    if o > v : sheep += o
    else : wolves += v 
    
  for i in range(Y) :
    for j in range(X) : 
      if matrix[i][j] != '#' and not visited[i][j] :
        BFS(j,i)

  print(sheep, wolves)
  
solution(input_data)
