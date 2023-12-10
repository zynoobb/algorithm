import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  data.pop(0)
  sy,sx,_,_ = map(int, data.pop(0).split())
  result = BFS(sx-1,sy-1,data)
  print(result)
  
def BFS (sx,sy,matrix) : 
  Y,X = len(matrix), len(matrix[0])
  visited = [[-1 for _ in range(X)] for _ in range(Y)]
  
  queue = deque()
  queue.append([sx,sy,0])
  visited[sy][sx] = 0
  
  while queue :
    x,y,wall = queue.popleft()
    directions = [[0,1],[0,-1],[1,0],[-1,0]]
    for dx,dy in directions :
      nx,ny = dx+x, dy+y
      if verify(X,Y,nx,ny) and visited[ny][nx] == -1 :
        tempWall = wall
        if matrix[ny][nx] == '#' :
          return tempWall + 1
        elif matrix[ny][nx] == '1' :
          tempWall += 1
          visited[ny][nx] = tempWall
          queue.append([nx,ny,tempWall])
        elif matrix[ny][nx] == '0' :  
          visited[ny][nx] = wall
          queue.appendleft([nx,ny,wall])
        
def verify (X,Y,x,y) :
  return 0 <= x < X and 0 <= y < Y

solution(input_data)
