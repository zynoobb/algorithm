import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  table = {1 : 1}
  for i in range(2, 6) :
    table[i] = table[i-1] * i
  
  result = list(map(lambda x : act(x, table), data))
  print('\n'.join(result))
  
def act (_str, table) :
  _sum = 0
  for i, v in enumerate(_str[::-1]) :
    _sum += int(v) * table[i+1]
  
  return str(_sum)
  
solution(input_data)