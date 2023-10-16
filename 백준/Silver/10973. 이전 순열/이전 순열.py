import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
   
def solution (data) :
  [n], arr = list(map(lambda x : list(map(int, x.split())), data))
  result = -1
  isToggle = False
  
  for i in range(n-1, 0, -1) :
    if isToggle : 
      break 
    elif arr[i] < arr[i-1] :
      for j in range(n-1, 0, -1) :
        if arr[j] < arr[i-1] :
          arr[j], arr[i-1] = arr[i-1], arr[j]
          result = arr[:i] + sorted(arr[i:], reverse=True)
          isToggle = True
          break
  
  print(' '.join(map(str,result)) if isToggle else '-1')
  
solution(input_data)
