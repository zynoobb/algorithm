import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  data.pop(0)
  result = []
  for idx, el in enumerate(data) :
    [a,b] = map(int, el.split())
    result.append('Case #{}: {}'.format(idx+1, a+b))

  print('\n'.join(map(str,result)))
  
solution(input_data)