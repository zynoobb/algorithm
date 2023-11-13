import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  matrix = [list(map(int, v.split())) for v in data]
  _max, _min = max(map(max,matrix)), min(map(min,matrix))
  
  result = 0
  for k in range(_min - 1, _max + 1) :
    _safe = 0
    visited = [[0] * n for _ in range(n)]
    for i in range(n) :
      for j in range(n) :
        if matrix[i][j] > k and not visited[i][j] :
          _safe += 1
          DFS(matrix,j,i,_safe,k,visited)
    result = max(result, _safe)
  print(result)  
  
def DFS (matrix,x,y,_safe,k,visited) :
  X,Y = len(matrix[0]), len(matrix)
  stack = [[x,y]]
  while stack :
    x,y = stack.pop()
    visited[y][x] = _safe
    
    direction = [[-1,0], [1,0], [0,-1], [0,1]]
    for dx, dy in direction :
      nx,ny = dx+x, dy+y
      if verify(nx,ny,X,Y) and matrix[ny][nx] > k and not visited[ny][nx] :
        stack.append([nx,ny])
  
def verify (x,y,X,Y) :
  return 0 <= x < X and 0 <= y < Y

solution(input_data)