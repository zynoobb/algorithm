import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()
    
def solution (data) :
  n,m = map(int, data.split())
  result = []
  
  for i in range(n) :
    temp = []
    for j in range(1, m + 1) :
      temp.append(str(i * m + j))
    result.append(' '.join(temp))
  print('\n'.join(result))

solution(input_data)
