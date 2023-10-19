import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  result = []
  for i in range(len(data)) :
    if data[i] == '0' : break
    else :result.append(act(data[i], i))
  print('\n'.join(result))
  
def act (_str, index) :
  r,w,h = map(int, _str.split())
  hypo = r * 2
  temp = hypo ** 2 >= w ** 2 + h ** 2
  return 'Pizza {} {} on the table.'.format(index + 1, 'fits' if temp else 'does not fit')
  
solution(input_data)
