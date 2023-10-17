import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  data.pop(0)
  arr = list(map(int, data))
  heap = []
  result = []
  
  for v in arr :
    if v != 0 : heapq.heappush(heap,-v)
    else :
      temp = -heapq.heappop(heap) if len(heap) else 0
      result.append(temp)
          
  print('\n'.join(map(str, result)))
    
  
solution(input_data)