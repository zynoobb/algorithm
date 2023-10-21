import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,_ = map(int,data.pop(0).split())
  named = [v.split() for v in data[:n]]
  named.sort(key= lambda x : int(x[1]))    
  arr = list(map(int,data[n:]))
  result = []
  
  for s in arr :
    left, right = 0, len(named)
    temp = 0
    while left <= right : 
      mid = (left + right) // 2
      if int(named[mid][1]) >= s :
        temp = mid
        right = mid - 1
      else :
        left = mid + 1
    result.append(named[temp][0])
    
  print('\n'.join(result))
    
solution(input_data)
