import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  matrix = list(map(lambda x : list(x), data))
  locationOfMines = {}
  
  for i in range(n) :
    for j in range(n) :
      if matrix[i][j].isdigit() : 
        locationOfMines['{}:{}'.format(i,j)] = '*'
        directions = [[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]]
        for [dx,dy] in directions :
          nx, ny = dx + j, dy + i
          if verify(n, nx, ny) :
            temp = '{}:{}'.format(ny,nx)
            tempVerify = locationOfMines.get(temp, None)
            if tempVerify != '*' and tempVerify != 'M' : 
              locationOfMines[temp] = locationOfMines.get(temp, 0) + int(matrix[i][j])
              if locationOfMines[temp] > 9 : locationOfMines[temp] = 'M'
  
  result = [['0' for _ in range(n)] for _ in range(n)]
  
  for key, value in locationOfMines.items() :
    y,x = map(int, key.split(':'))
    result[y][x] = str(value)
    
  print('\n'.join(map(lambda x : ''.join(x),result)))
  
def verify (n,y,x) : 
  return 0 <= x < n and 0 <= y < n
  
solution(input_data)

