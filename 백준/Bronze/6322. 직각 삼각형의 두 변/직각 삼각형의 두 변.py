import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import math

def solution (data) :
  data.pop()
  result = []
  for i in range(len(data)) :
    result += act(data[i],i)
  result.pop()
  print('\n'.join(result))
  
def act (str, i) :
  arr = list(map(int, str.split()))
  _str = 'abc'
  _except = _str[arr.index(-1)]
  _notExcept = 1 if _except == 'a' else 0
  fined = None
  
  if _except == 'c' :
    fined = arr[0] ** 2 + arr[1] ** 2
  elif (arr[2] > arr[_notExcept]):
    fined = arr[2] ** 2 - arr[_notExcept] ** 2
  
  _sqrt = '{:.3f}'.format(math.sqrt(fined)) if fined else None
  storage = ['Triangle #{}'.format(i+1)]
  storage += ['{} = {}'.format(_except, _sqrt) if _sqrt else 'Impossible.', '']
  return storage
  
solution(input_data)
