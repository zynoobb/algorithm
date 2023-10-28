import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act (_str) :
  a,b,c = map(int, _str.split())
  
  if b - a == c - b : return 'AP {}'.format(c + (c-b))
  else : return 'GP {}'.format(c * (c//b))

solution(input_data)