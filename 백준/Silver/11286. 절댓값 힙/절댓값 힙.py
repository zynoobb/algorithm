import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

import heapq

def solution (data) :
  data.pop(0)
  arr = list(map(int, data))
  heap = []
  result = []
  storage = {}
  
  for v in arr :
    if v != 0 : 
      if storage.get(v , None) : storage[v] += 1
      else : storage[v] = 1
      
      heapq.heappush(heap,abs(v))
    else :
      if len(heap) == 0 :
        result.append(0)
      else :
        negative = -heapq.heappop(heap)
        positive = -negative
        target = negative if storage.get(negative, None) else positive
        storage[target] -= 1
        result.append(target)
        
  print('\n'.join(map(str, result)))
  
solution(input_data)