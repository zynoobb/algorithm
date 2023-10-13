import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  data.pop(0)
  string = ''.join(data)
  dec,inc = ''.join(sorted(data, reverse=True)),''.join(sorted(data))
  
  print('DECREASING' if string == dec else 'INCREASING' if string == inc else 'NEITHER')
    
solution(input_data)
