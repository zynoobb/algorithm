import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
    
def solution (data) :
  result = []
  
  i = 0
  while (True) : 
    if data[i] == '***' : break
    result.append(data[i][::-1])
    i += 1
  
  print('\n'.join(result))

solution(input_data)
