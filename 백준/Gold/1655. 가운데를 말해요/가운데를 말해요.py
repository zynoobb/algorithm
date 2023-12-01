import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

from heapq import heappush, heappop

def solution (data) :
  data.pop(0)
  arr = [int(v) for v in data]
  
  minHeap, maxHeap, result = [], [], []
  
  for n in arr :
    if len(minHeap) == len(maxHeap) : heappush(maxHeap, -n)
    else : heappush(minHeap, n)
    
    # swap
    if minHeap and maxHeap[0] * -1 > minHeap[0] :
      maxV = heappop(maxHeap) * - 1
      minV = heappop(minHeap)
      heappush(minHeap, maxV)
      heappush(maxHeap, -minV)
      
    result.append(str(maxHeap[0] * - 1))
  
  print('\n'.join(result))
  
solution(input_data)
