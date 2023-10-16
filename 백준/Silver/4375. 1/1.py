import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
   
def solution (data) :
  arr = list(map(lambda x : act(int(x)), data))
  print('\n'.join(arr))
  
def act (n) :
  repeat_str = '1'
  while(True) :
    if int(repeat_str) % n == 0 : break
    else : repeat_str += '1'
  return str(len(repeat_str))
      
solution(input_data)
