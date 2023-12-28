import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  limit, *arr = list(map(int, data))
  
  queue = deque()
  i = 0
  while arr[i] != -1 :
    if arr[i] != 0 and limit > len(queue): 
      queue.append(arr[i])
    elif arr[i] == 0 : queue.popleft()
    i += 1 
  
  print(' '.join(map(str,queue)) if queue else 'empty')
  
solution(input_data)
