import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque


def solution (data) :
  data.pop(0)
  testCase = []
  for i in range(0,len(data),3) :
    testCase.append(data[i:i+3])
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(result))
  
def act(case) :
  command,n,str = case
  deq = deque(str[1:-1].split(',')) if n != '0' else deque()
  rev = 0

  for order in command :
    if order == 'R' : rev += 1
    else :
      if len(deq) == 0 : return 'error'
      else :
        if rev % 2 == 0 : deq.popleft()
        else : deq.pop()
  
  revDeq = deque(reversed(deq))
  return f'[{",".join(deq)}]' if rev % 2 == 0 else f'[{",".join(revDeq)}]'

solution(input_data)
