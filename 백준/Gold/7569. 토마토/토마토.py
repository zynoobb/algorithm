import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  X,Y,Z = arr.pop(0)
  matrix = []
  for i in range(0,len(arr),Y) :
    matrix.append(arr[i:i+Y])
  
  start = []
  zeroCnt = 0
  for i in range(Z) :
    for j in range(Y) :
      for k in range(X) :
        if matrix[i][j][k] == 1 : 
          start.append((1,i,j,k))
        if matrix[i][j][k] == 0 :
          zeroCnt += 1
  
  def verify (z,y,x) :
    return 0 <= x < X and 0 <= y < Y and 0 <= z < Z
    
  def BFS () :
    queue = deque([*start])
    directions = [[0,0,-1],[0,0,1],[0,-1,0],[0,1,0],[-1,0,0],[1,0,0]]
    visited = [[[False for _ in range(X)] for _ in range(Y)] for _ in range(Z)]
    
    while queue :
      dist,z,y,x = queue.popleft()
      if visited[z][y][x] : continue
      matrix[z][y][x] = dist
      visited[z][y][x] = True
      
      for dz, dy, dx in directions :
        nz, ny, nx = dz + z, dy + y, dx + x
        if verify(nz,ny,nx) and matrix[nz][ny][nx] == 0 and not visited[nz][ny][nx] :
          queue.append((dist+1,nz,ny,nx))
  
  if zeroCnt == 0 :
    print(0)
    return
  
  BFS()
  def matrixVerify () :
    maxValue = 0
    for i in range(Z) : 
      for j in range(Y) :
        for k in range(X) :
          if matrix[i][j][k] == 0 : return -1
          maxValue = max(maxValue, matrix[i][j][k])
    return maxValue - 1
    
  result = matrixVerify()
  print(result)
    
solution(input_data)