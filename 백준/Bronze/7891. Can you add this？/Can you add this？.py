import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act(_str) :
  a,b = map(int, _str.split())
  return str(a + b)

solution(input_data)