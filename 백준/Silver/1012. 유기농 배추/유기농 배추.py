import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  arr = [list(map(int, v.split())) for v in data]
  tc = []
  
  i = 0 
  for v in arr :
    if len(v) == 3 : 
      _,_,k = v
      tc.append(arr[i:i+k+1])
      i += k + 1
  
  result = list(map(lambda x : act(x), tc))
  print('\n'.join(map(str, result)))
  
def act (arr) :
  n,m,_ = arr.pop(0)
  matrix = [[0] * n for _ in range(m)]
  for x,y in arr : matrix[y][x] = -1
  
  num = 0
  for i in range(m) :
    for j in range(n) :
      if matrix[i][j] == -1 : 
        num += 1
        DFS(matrix,j,i,num)
        
  return num
  
def DFS (matrix,x,y,num) :
  X,Y = len(matrix[0]), len(matrix)
  stack = [[x,y]]
  
  while stack :
    x,y = stack.pop()
    matrix[y][x] = num
    
    direction = [[-1,0], [1,0], [0,-1], [0,1]]
    for dx, dy in direction :
      nx,ny = dx+x, dy+y
      if verify(nx,ny,X,Y) and matrix[ny][nx] == -1 :
        stack.append([nx,ny])    
  
def verify (x,y,X,Y) :
  return 0 <= x < X and 0 <= y < Y

solution(input_data)