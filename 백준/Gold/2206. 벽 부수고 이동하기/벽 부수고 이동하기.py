import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  n,m = map(int, data.pop(0).split())
  matrix = [list(map(int, list(v))) for v in data]
  
  visited = [[[False,False] for _ in range(m)] for _ in range(n)]
  visited[0][0][0] = True
  visited[0][0][1] = True
  
  def verify(x,y,wall) :
    return 0 <= x < m and 0 <= y < n and not visited[y][x][wall]
  
  def BFS () :
    queue = deque()
    queue.append([0,0,0,1])
    directions = [[0,1],[0,-1],[1,0],[-1,0]]
    
    while queue :
      x,y,wall,dist = queue.popleft()
      if x == m - 1 and y == n - 1 : return dist
      
      for dx,dy in directions :
        nx,ny = dx+x, dy+y
        
        if verify(nx,ny,wall) :
          if not matrix[ny][nx] :
            visited[ny][nx][wall] = True
            queue.append([nx,ny,wall,dist+1])
          else :
            if not wall :
              visited[ny][nx][wall] = True
              queue.append([nx,ny,1,dist+1])
          
    return -1 
    
  result = BFS()
  print(result)

solution(input_data)
