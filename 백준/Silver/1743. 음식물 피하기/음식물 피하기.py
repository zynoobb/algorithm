import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  Y,X,K = arr.pop(0)
  
  matrix = [[False for _ in range(X)] for _ in range(Y)]
  for y,x in arr :
    matrix[y-1][x-1] = True
  
  visited = [[False for _ in range(X)] for _ in range(Y)]
  directions = [[0,1],[0,-1],[1,0],[-1,0]]
  
  def verify (x,y) :
    return 0 <= x < X and 0 <= y < Y
  
  def BFS (x,y) :
    queue = deque([[x,y]])
    cnt = 0
    
    while queue :
      x,y = queue.popleft()

      if visited[y][x] : continue
      visited[y][x] = True
      cnt += 1
      
      for dx,dy in directions :
        nx,ny = dx+x, dy+y
        if verify(nx,ny) and not visited[ny][nx] and matrix[ny][nx] :
          queue.append([nx,ny])
          
    return cnt
  
  result = 0
  for i in range(Y) :
    for j in range(X) :
      if matrix[i][j] and not visited[i][j] :
        temp = BFS(j,i)          
        result = max(result, temp)
        
  print(result)
  
solution(input_data)
