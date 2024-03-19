import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  queue = deque(list(enumerate(map(int, data[1].split()))))
  result = []

  while queue :
    idx, n = queue.popleft() 
    result.append(idx + 1)
    queue.rotate(-n+1) if n > 0 else queue.rotate(-n)
    
  print(*result)
  
solution(input_data)
