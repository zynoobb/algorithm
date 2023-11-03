import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  
  result = list(map(lambda x : binary_search(int(x)), data))
  print('\n'.join(result))
  
def binary_search (n) :
  left, right = 1, 50
  arr = []
  while right >= left  : 
    mid = (left + right) // 2
    
    arr.append(str(mid))  
    if mid == n : break
    elif mid > n :
      right = mid - 1
    else : 
      left = mid + 1
    
  return ' '.join(arr)

solution(input_data)