import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  data.pop(0)
  counts = len([v for v in data if v == '1'])  
  print('Junhee is cute!' if counts > len(data)/2 else 'Junhee is not cute!')
    
solution(input_data)
