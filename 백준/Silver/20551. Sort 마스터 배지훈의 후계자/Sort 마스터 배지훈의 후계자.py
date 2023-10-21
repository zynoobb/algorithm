import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,_ = map(int, data.pop(0).split())
  arr = sorted(list(map(int, data[:n])))
  catch = list(map(int, data[n:]))
  result = [bisect(arr, v) for v in catch]
  print('\n'.join(map(str, result)))

def bisect (arr, x) :
  if arr[0] > x or x > arr[-1] : 
    return -1
  
  left, right = 0, len(arr) - 1
  
  while left <= right :
    mid = (left + right) // 2
    if arr[mid] > x :
      right = mid - 1 
    elif x > arr[mid] : 
      left = mid + 1
    elif arr[mid] == x :
      if right == mid : break
      else : right = mid
  
  return mid if arr[mid] == x else -1    
  
solution(input_data)
