import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  X, Y = map(int, data.pop(0).split())
  matrix = list(map(lambda x : list(map(int,list(x))) , data))
  print(dijkstra(matrix, X,Y))
  
def dijkstra (matrix,X,Y) :
  pq = []
  heapq.heappush(pq, (0,0,0))
  matrix[0][0] = 0
  dp = [[float('inf')] * X for _ in range(Y)]
  dp[0][0] = 0
  
  while pq :
    wall, x, y = heapq.heappop(pq)
  
    directions = [[-1,0], [1,0], [0,-1], [0,1]]
    for dx, dy in directions :
      nx, ny = dx + x, dy + y
      if verify(nx,ny,X,Y) and dp[ny][nx] == float('inf') :
        temp = wall
        if dp[ny][nx] > wall :
          dp[ny][nx] = wall
          if matrix[ny][nx] == 1 :
            temp += 1
          dp[ny][nx] = temp
          heapq.heappush(pq, (temp, nx, ny))
    
  return dp[-1][-1]

def verify (x,y,X,Y) :
  return 0 <= x < X and 0 <= y < Y

solution(input_data)