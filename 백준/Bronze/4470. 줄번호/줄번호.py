import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N = int(data.pop(0))
  result = []
  for i in range(N) :
    result.append('{}. {}'.format(i+1, data[i]))
  
  print('\n'.join(result))
  
solution(input_data)
