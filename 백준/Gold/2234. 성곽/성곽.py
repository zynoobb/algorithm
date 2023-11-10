import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  arr = [list(map(int, _str.split())) for _str in data]
  n,m = arr.pop(0)
  directions = [[-1,0],[0,-1],[1,0],[0,1]]
  visited = [[0 for _ in range(n)] for _ in range(m)]
  info = [[0 for _ in range(n)] for _ in range(m)]
  room_num, max_size, remove_max_size = 0,0,0
  room_sizes = {}
  
  def DFS (y,x) :
    stack = deque([[x,y]])
    dep = 0

    while stack :
      x,y = stack.pop()
      if visited[y][x] : continue
      
      visited[y][x] = 1
      info[y][x] = room_num
      dep += 1
    
      for i in range(4) :
        door = (1 << i)
        if not arr[y][x] & door == door :
          dx, dy = directions[i]
          nx, ny = dx + x, dy + y
          
          if verify(nx,ny,n,m) and visited[ny][nx] == 0 :
            stack.append([nx,ny])
    
    return dep
  
  for i in range(m) :
    for j in range(n) :
      if visited[i][j] == 0 :
        room_num += 1
        temp = DFS(i,j)
        max_size = max(temp, max_size)
        room_sizes[room_num] = temp
   
  for i in range(m) :
    for j in range(n) :
      for k in range(4) : 
        door = (1 << k)
        if arr[i][j] & door == door :
          dx, dy = directions[k]
          nx, ny = dx + j, dy + i
          if verify(nx, ny, n, m) and info[i][j] != info[ny][nx]:
            remove_max_size = max(room_sizes[info[i][j]] + room_sizes[info[ny][nx]], remove_max_size)
            
  print(room_num)
  print(max_size)
  print(remove_max_size)

def verify (x,y,X,Y) : 
  return 0 <= x < X and 0 <= y < Y
       
solution(input_data)

# 7 11 17