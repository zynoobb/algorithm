import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

from collections import deque

def solution (data) :
  [[N,M], arr] = list(map(lambda x : list(map(int, x.split())), data))
  queue = deque([v for v in range(1, N+1)])
  
  result = 0
  
  for i in range(M) :
    target = queue.index(arr[i])
    reduce = True if len(queue) // 2 >= target else False
    
    while queue[0] != arr[i] :
      if reduce : 
        item = queue.popleft()
        queue.append(item)
      else :
        item = queue.pop()
        queue.appendleft(item)
        
      result += 1

    queue.popleft()
        
  print(result)
  
solution(input_data)
