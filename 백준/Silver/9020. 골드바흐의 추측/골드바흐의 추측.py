import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  _, *arr = list(map(int, data))
  table = primeTable()
  result = list(map(lambda x : act(table, x), arr))
  print('\n'.join(result))
  
def primeTable () :
  limit = 10001
  table = [True] * limit
  table[0] = table[1] = False
  
  i = 2
  while (i**2 <= limit) :
    if table[i] :
      for j in range(i**2, limit, i) :
        table[j] = False
    i += 1
  return table
  
def act (table, n) :
  for i in range(n//2, n) :
    if table[i] :
      for j in range(n//2, 0, -1) :
        if table[j] and i + j == n :
          return '{} {}'.format(i,j) if j > i else '{} {}'.format(j,i) 

solution(input_data)
