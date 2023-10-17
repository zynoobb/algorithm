import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  table = makingTable()
  result = list(map(lambda x : countPrimes(table,int(x)), data))
  print('\n'.join(result))

# 에리스토테네스의 체
def makingTable () :
  n = 123456 * 2 + 1
  table = [True] * n
  table[0] = table[1] = False
  
  i = 2
  while (i**2 <= n) :
    if table[i] :
      for j in range(i**2, n, i) :
        table[j] = False
    i += 1
  return table
  
def countPrimes (table,n) :
  return str(table[n+1:2*n+1].count(True))

solution(input_data)
