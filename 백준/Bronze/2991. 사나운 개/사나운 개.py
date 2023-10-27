import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [a,b,c,d], arr = map(lambda x : list(map(int, x.split())), data)
  result = list(map(lambda x : verify(a,b,x) + verify(c,d,x), arr))
  print('\n'.join(map(str, result)))
  
def verify (x,y,n) :
  _n = n % (x + y) 
  return 1 if 0 < _n <= x else 0 
  
solution(input_data)