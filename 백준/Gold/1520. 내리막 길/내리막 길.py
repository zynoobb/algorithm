import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
sys.setrecursionlimit(150000)

def solution (data) :
  n,m = map(int, data.pop(0).split())
  matrix = [list(map(int, v.split())) for v in data]
  dp = [[-1 for _ in range(m)] for _ in range(n)]
  dp[n-1][m-1] = 1
  directions = [[0,1],[0,-1],[1,0],[-1,0]]
  
  def verify (x,y) :
    return 0 <= x < m and 0 <= y < n
  
  def DFS (x,y) :
    if dp[y][x] != -1 :
      return dp[y][x]
    
    cur = 0    
    for dx,dy in directions :
      nx,ny = dx + x, dy + y
      if verify(nx,ny) and matrix[y][x] > matrix[ny][nx] :
        cur += DFS(nx,ny)
    
    dp[y][x] = cur
    return dp[y][x]
  
  result = DFS(0,0)
  print(result)

solution(input_data)
