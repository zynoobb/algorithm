import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,m = list(map(int, data.pop(0).split()))
  arr = list(map(int, data))
  
  left = 0
  right = max(arr) * m
  while left <= right :
    mid = (left + right) // 2
    passed = 0
    
    for v in arr : passed += mid // v
    
    if passed >= m : right = mid - 1
    else : left = mid + 1
      
  print(left)
    
solution(input_data)
