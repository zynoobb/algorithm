import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(int, data))
  target = arr.pop(0)
  arr.pop()
  
  result = list(map(lambda x : act(target, x), arr))
  print('\n'.join(result))
  
def act (target, n) :
  return '{} is{} a multiple of {}.'.format(n, '' if n % target == 0 else ' NOT', target) 
      
solution(input_data)

