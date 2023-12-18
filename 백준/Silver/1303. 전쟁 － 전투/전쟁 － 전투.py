import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  X,Y = map(int, data.pop(0).split())
  visited = [[False for _ in range(X)] for _ in range(Y)]
  
  def verify (x,y,tag) : 
    return 0 <= x < X and 0 <= y < Y and not visited[y][x] and data[y][x] == tag
  
  def BFS (x,y,tag) : 
    size = 1
    queue = deque()
    queue.append([x,y])
    visited[y][x] = True
    directions = [[0,-1],[0,1],[1,0],[-1,0]]
    
    while queue :
      [x,y] = queue.popleft()
      
      for dx,dy in directions :
        nx,ny = dx+x, dy+y
        if verify(nx,ny,tag) : 
          visited[ny][nx] = True
          queue.append([nx,ny])
          size += 1
          
    return size ** 2
  
  whiteTeam = blueTeam = 0
  
  for i in range(Y) :
    for j in range(X) :
      if not visited[i][j] : 
        if data[i][j] == 'W' : whiteTeam += BFS(j,i,data[i][j])
        else : blueTeam += BFS(j,i,data[i][j])
  
  print(whiteTeam, blueTeam)
          
solution(input_data)