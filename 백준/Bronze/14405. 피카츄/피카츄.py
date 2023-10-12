import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()
    
def solution (data) :
  arr = ['pi', 'ka', 'chu']
  s = data
  
  for str in arr :
    s = s.replace(str, ' ')
  
  print('YES' if s.isspace() else 'NO')
  
solution(input_data)

