import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n, m = map(int, data.split())
  a,b,c = map(lambda x : factorial(x), [n,m,n-m])
  result = a // (b * c)
  print(result)
  
def factorial(n) :
  return n * factorial(n-1) if n > 0 else 1
  
solution(input_data)