import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  tc = []
  for i,v in enumerate(data) : 
    if v == '0' : break
    elif v.isdigit() :
      tc.append(data[i+1:i+int(v)+1])
      i += int(v)
  
  result = list(map(lambda x : dijkstra(x[0], x[1]), enumerate(tc)))
  print('\n'.join(result))
  
def dijkstra (index, arr) :
  matrix = list(map(lambda x : list(map(int,x.split())), arr))
  N = len(arr)
  dp = [[float('inf')] * N for _ in range(N)]
  dp[0][0] = 0
  pq = []
  heapq.heappush(pq, (matrix[0][0],0,0))

  while pq :
    cost, x, y = heapq.heappop(pq)

    directions = [[-1,0], [1,0], [0,-1], [0,1]]
    for dx,dy in directions :
      nx, ny = dx + x, dy + y
      if verify(nx,ny,N) and dp[ny][nx] > matrix[ny][nx] + cost :
        nextCost = matrix[ny][nx] + cost
        dp[ny][nx] = nextCost
        heapq.heappush(pq, (nextCost, nx, ny))
      
  return f'Problem {index+1}: {dp[-1][-1]}'

def verify (x,y,N) :
  return 0 <= x < N and 0 <= y < N
  
solution(input_data)