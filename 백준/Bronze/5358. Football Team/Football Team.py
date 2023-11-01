import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act (_str) :
  arr = list(_str)
  for i, v in enumerate(arr) :
    if v == 'i' : arr[i] = 'e'
    elif v == 'e' : arr[i] = 'i'
    elif v == 'I' : arr[i] = 'E'
    elif v == 'E' : arr[i] = 'I'
  
  return ''.join(arr)

solution(input_data)