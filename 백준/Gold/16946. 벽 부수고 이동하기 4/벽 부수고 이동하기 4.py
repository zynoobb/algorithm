import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  n,m = map(int, data.pop(0).split())
  arr = [list(map(int, list(x))) for x in data]
  
  directions = [[-1,0],[0,-1],[1,0],[0,1]]
  visited = [[0 for _ in range(m)] for _ in range(n)]
  info = [[0 for _ in range(m)] for _ in range(n)]
  roomsSize = {}
  roomNum = 0
  
  for i in range(n) : 
    for j in range(m) :
      if not arr[i][j] and not visited[i][j] : 
        roomNum += 1
        size = DFS(arr, directions, visited, info, roomNum, i,j)
        roomsSize[roomNum] = size
  
  
  for i in range(n) : 
    for j in range(m) :
      if arr[i][j] :
        brokenRoomSize = 1
        usedRoom = []
        for [dx,dy] in directions : 
          nx,ny = dx+j, dy+i
          if verify(len(arr[0]), len(arr), nx, ny) and info[ny][nx] :
            if not info[ny][nx] in usedRoom :
              usedRoom.append(info[ny][nx])
              brokenRoomSize += roomsSize[info[ny][nx]]
        arr[i][j] = brokenRoomSize % 10

  result = list(map(lambda x : ''.join(map(str, x)), arr))
  print('\n'.join(result))

def DFS(arr, directions, visited, info, roomNum, y, x) :
  stack = deque([[x,y]])
  dep = 0
  while stack :
    x,y = stack.pop()
    if visited[y][x] : continue
    
    visited[y][x] = 1
    info[y][x] = roomNum
    dep += 1
    
    for [dx,dy] in directions : 
      nx,ny = dx+x, dy+y
      if verify(len(arr[0]), len(arr), nx, ny) and not visited[ny][nx] and not arr[ny][nx] :
        stack.append([nx,ny])
      
  return dep

def verify(X,Y,x,y) :
  return 0 <= x < X and 0 <= y < Y
    
solution(input_data)