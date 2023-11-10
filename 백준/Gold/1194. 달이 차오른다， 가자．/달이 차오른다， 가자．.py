import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  n,m = map(int, data.pop(0).split())
  matrix = list(map(lambda x : list(x), data))
  
  x,y = None,None
  for i in range(n) :
    for j in range(m) :
      if matrix[i][j] == '0' :
        x,y = j,i
  
  result = BFS(matrix,x,y)
  print(result)

def BFS(matrix,x,y):
  X, Y = len(matrix[0]), len(matrix)
  visited = [[0 for _ in range(X)] for _ in range(Y)]
  d_keys = 0
  visited[y][x] = d_keys
  queue = deque([[x, y, 0, d_keys]])

  while queue:
    x, y, dist, keys = queue.popleft()
    directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    for dx, dy in directions:
      nx, ny = dx + x, dy + y

      if not locationVerify(nx, ny, X, Y) or matrix[ny][nx] == '#':
        continue

      temp_key = keys

      if matrix[ny][nx] == '1': return dist + 1
      
      elif 'A' <= matrix[ny][nx] <= 'Z':
        verify_key = ord(matrix[ny][nx]) - ord('A')
        if not temp_key & (1 << verify_key) : continue
        
      elif 'a' <= matrix[ny][nx] <= 'z':
        key = ord(matrix[ny][nx]) - ord('a')
        temp_key |= (1 << key) 

      if visited[ny][nx] & (1 << temp_key): continue
      visited[ny][nx] |= (1 << temp_key)
      queue.append([nx, ny, dist + 1, temp_key])

  return -1

def locationVerify (x,y,X,Y) :
  return 0 <= x < X and 0 <= y < Y
  
solution(input_data)
