import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  arr = list(map(float, data))
  
  result = []
  for i in range(1, len(data)) : 
    temp = f'{arr[i] - arr[i-1]:.2f}'
    result.append(temp)
    
  print('\n'.join(result))
  
solution(input_data)

