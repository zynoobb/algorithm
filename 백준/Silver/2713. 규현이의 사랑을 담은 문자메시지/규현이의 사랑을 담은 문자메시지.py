import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))

def act (_str) :
  arr = list(_str)
  emptyIdx = []
  for i in range(len(_str)) :
    if _str[i] == ' ' : emptyIdx.append(i)
  
  def join_list (a, b = len(arr)) :
    temp = ''.join(arr[a:b])
    return int(temp) if temp.isdigit() else temp
    
  n, m, s = join_list(0,emptyIdx[0]), join_list(emptyIdx[0] + 1, emptyIdx[1]), join_list(emptyIdx[1] + 1)
  matrix = [[-1 for _ in range(m)] for _ in range(n)]
  trans_s = transfer_str(s)
  fill_matrix(matrix, trans_s,n,m)
  
  answer = ''
  for i in matrix :
    for j in i :
      answer += j if j != -1 else '0'
      
  return answer

def transfer_str (s) : 
  table = {}
  for i in range(26) :
    _bin = bin(i + 1)
    table[chr(i+65)] = _bin[2:].rjust(5,'0')
  
  code = ''
  for v in s : 
    code += table[v] if v != ' ' else '00000'
  return code
  
def fill_matrix (matrix, _s,n,m) :
  location = [0,0]
  direction = [[1,0],[0,1],[-1,0],[0,-1]]
  directionIdx = 0
  for v in _s :
    x,y = location
    matrix[y][x] = v
    
    dx,dy = direction[directionIdx % 4]
    nx,ny = x + dx, y + dy
    
    if location_Verify(n,m,nx,ny) and matrix[ny][nx] == -1 : 
      location = [nx, ny]
    else :
      directionIdx += 1
      dx,dy = direction[directionIdx % 4]
      nx,ny = x + dx, y + dy
      location = [nx, ny]
  return matrix

def location_Verify (n,m,x,y) :
  return 0 <= x < m and 0 <= y < n
    
solution(input_data)

