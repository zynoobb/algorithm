import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  table = tableMaking()
  data.pop()
  result = [act(table, int(v)) for v in data]
  print('\n'.join(result))
  
def tableMaking () :
  limit = 1000001
  table = [True] * limit
  table[0] = table[1] = False
  i = 2
  while i**2 <= limit :
    if table[i] :
      for j in range(i**2, limit, i) :
        table[j] = False
    i += 1
  return table

def act (table, n) :
  x,y = None, None
  for i in range(3,n,2) :
    if table[i] and table[n-i] :
      x,y = i, n-i
      break
  return '{} = {} + {}'.format(n,x,y) if x else 'Goldbach\'s conjecture is wrong.'
   
solution(input_data)