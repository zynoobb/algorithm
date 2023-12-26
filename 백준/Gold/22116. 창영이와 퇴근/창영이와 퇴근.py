import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from heapq import heappop, heappush

def solution (data) :
  N = int(data.pop(0))
  matrix = [list(map(int, v.split())) for v in data]
  
  def verify(x,y) :
    return 0 <= x < N and 0 <= y < N
  
  def dijkstra () :
    dp = [[float('inf') for _ in range(N)] for _ in range(N)]
    dp[0][0] = 0
    
    pq = []
    heappush(pq, [0,0,0])
    
    directions = [[0,1],[0,-1],[1,0],[-1,0]]
    
    while pq : 
      cost, x, y = heappop(pq)
      if dp[y][x] < cost : continue
      
      for dx,dy in directions : 
        nx,ny = dx+x, dy+y
        
        if verify(nx,ny) :
          next_cost = max(cost, abs(matrix[ny][nx] - matrix[y][x]))
          if dp[ny][nx] > next_cost :
            dp[ny][nx] = next_cost
            heappush(pq, [next_cost, nx, ny])
    return dp[-1][-1]     

  result = dijkstra()
  print(result)
     
solution(input_data)