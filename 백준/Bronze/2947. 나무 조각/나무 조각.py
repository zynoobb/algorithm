import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  arr = list(map(int, data.split()))
  result = []
  _len = len(arr)
  
  k = 0
  while k < _len :
    for i in range(1,_len) : 
      if arr[i-1] > arr[i] :
        arr[i-1],arr[i] = arr[i],arr[i-1]
        result.append(' '.join(map(str, arr)))
    k += 1
    
  print('\n'.join(result))
      
solution(input_data)
