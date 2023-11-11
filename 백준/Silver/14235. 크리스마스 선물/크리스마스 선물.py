import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
import heapq

def solution (data) :
  int(data.pop(0))
  
  pq, result = [], []
  
  for v in data :
    if v == '0' : 
      result.append(abs(heapq.heappop(pq))) if pq else result.append(-1)
    else :
      items = list(map(lambda x : -int(x), v.split()))
      for item in items[1:] :
        heapq.heappush(pq, item)
        
  print('\n'.join(map(str, result)))
        
solution(input_data)
