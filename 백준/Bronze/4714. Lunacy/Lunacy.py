import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act (_str) :
  x = '{:.2f}'.format(float(_str))
  y = '{:.2f}'.format(float(x) * 0.167)
  return 'Objects weighing {} on Earth will weigh {} on the moon.'.format(x,y)
  
solution(input_data)