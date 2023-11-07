import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  _s = data.pop(0)
  _f, _b = _s.split('*')
  
  result = list(map(lambda x : act(x,_f,_b), data))
  print('\n'.join(result))
  

def act (_str, _f, _b) : 
  _f_index, _b_index = search(_str, _f), search(_str[::-1], _b[::-1])
  if 0 > _f_index or 0 > _b_index : return 'NE'
  elif len(_str) >= _f_index + _b_index : return 'DA'
  else : return 'NE'
  
def search (_str, _compare) :
  temp, index = '', -1
  for i in range(len(_str)) :
    if temp == _compare : 
      index = i
      break
    else : 
      temp += _str[i]
  
  return index
  
    
solution(input_data)