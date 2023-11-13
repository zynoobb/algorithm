import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()
from collections import deque

def solution (data) :
  n,m = map(int, data.split())
  history = [-1] * 100001
  
  queue = deque([n])
  while queue :
    node = queue.popleft()
    if node == m : break
    for next in [node+1 , node-1, node*2] :
      if 0 <= next <= 100000 and history[next] == -1 :
        history[next] = node
        queue.append(next)
  
  result = [m]
  k = m
  while k != n :
    result.append(history[k])
    if history[k] == 0 : break
    k = history[k]
  
  result.reverse()
  print(len(result) - 1)
  print(* result)

solution(input_data)