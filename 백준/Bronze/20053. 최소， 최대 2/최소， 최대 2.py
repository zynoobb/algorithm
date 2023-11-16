import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  result = []
  
  for i in range(2, len(data), 2) : 
    temp = list(map(int, data[i].split()))
    result.append(f'{min(temp)} {max(temp)}')
    
  print('\n'.join(result))
    
solution(input_data)