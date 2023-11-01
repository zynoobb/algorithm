import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n = int(data)
  result = []
  for i in range(1, n+1) :
    result.append(str(i))
    if i % 6 == 0 or i == n :
      result.append('Go!')
    
  print(' '.join(result))
  
solution(input_data)

