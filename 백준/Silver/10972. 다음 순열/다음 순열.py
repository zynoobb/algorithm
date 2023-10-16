import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  n = int(data[0])
  arr = list(map(int,data[1].split()))
  result = -1
  isToggle = False
  
  for i in range(n-1, 0, -1) :
    if isToggle : 
      break
    elif arr[i-1] < arr[i] :
      for j in range(n-1, 0, -1) :
        if arr[i-1] < arr[j] :
          arr[i-1], arr[j] = arr[j], arr[i-1]
          result = arr[:i] + sorted(arr[i:])
          isToggle = True
          break
  
  print(' '.join(map(str,result)) if isToggle else result)
 
solution(input_data)
