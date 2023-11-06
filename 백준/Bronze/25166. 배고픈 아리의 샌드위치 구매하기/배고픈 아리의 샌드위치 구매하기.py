import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  a,b = map(lambda x : int(x), data.split())
  
  if 1024 > a : 
    print('No thanks')
  else : 
    temp = a - 1023
    print('Thanks' if bin(temp & b) == bin(temp) else 'Impossible')
  
solution(input_data)