import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act (_str) :
  arr = list(map(int, _str.strip().split()))
  powers = [0] * 4

  for i in range(4) :
    temp = arr[i] + arr[i+4]
    if 2 > i : powers[i] = temp if temp >= 1 else 1
    elif 2 == i : powers[i] = temp if temp >= 0 else 0
    else : powers[i] = temp
  
  return str(powers[0] + powers[1] * 5 + powers[2] * 2 + powers[3] * 2)
    
solution(input_data)