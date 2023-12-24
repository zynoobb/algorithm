import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from heapq import heappop, heappush

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [_,_],present,children = arr
  
  presentHeap = []
  for p in present :
    heappush(presentHeap, -p)
    
  result = 1
  for c in children :
    box = -heappop(presentHeap)
    if c > box : 
      result = 0
      break
    else :
      if c == box : continue
      heappush(presentHeap, -(box-c))
  
  print(result)
    
solution(input_data)