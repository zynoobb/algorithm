import heapq

def solution(scoville, K):
  heap = sorted(scoville)
  result = 0
  
  while (heap[0] < K) :
    if len(heap) <= 1 : return -1
    else :
      f1,f2 = heapq.heappop(heap),heapq.heappop(heap)
      heapq.heappush(heap, f1 + f2 * 2)
      result += 1
  
  return result