import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from collections import deque

def solution (data) :
  data.pop(0)
  
  testCase = []
  for i in range(len(data)) :
    if data[i].isdigit() :
      n = int(data[i])
      testCase.append(data[i:i+n+3])
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(result))

def act (case) : 
  n = int(case.pop(0))
  arr = [list(map(int, v.split())) for v in case]
  home, csv, [tx,ty] = arr[0], arr[1:], arr[-1]
  queue = deque()
  queue.append(home)
  visited = [False for _ in range(n+1)]
  
  while queue :
    x,y = queue.popleft()
    if tx == x and ty == y : return 'happy'
    for i in range(n+1) : 
      if not visited[i] :
        dx,dy = csv[i]
        dif = abs(dx-x) + abs(dy-y)
        if dif <= 1000 :
          visited[i] = True
          queue.append([dx,dy])
    
  return 'sad'
  
solution(input_data)