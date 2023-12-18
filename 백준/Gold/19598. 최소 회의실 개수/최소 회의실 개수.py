import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
from heapq import heappush, heappop

def solution (data) :
  n = int(data.pop(0))
  schedules = [list(map(int, v.split())) for v in data]
  schedules.sort(key= lambda x : x[0])
  
  rooms = []
  heappush(rooms, schedules[0][1])
  
  for i in range(1,n) :
    start, end = schedules[i]
    if start >= rooms[0] :
      heappop(rooms)
    
    heappush(rooms, end)
    
  print(len(rooms))
  
solution(input_data)