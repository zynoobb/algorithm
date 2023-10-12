import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
  
def verify (s) :
  lowerCase = s.lower()
  gLen, bLen = lowerCase.count('g'), lowerCase.count('b')
  txt = 'GOOD' if gLen > bLen else 'NEUTRAL' if gLen == bLen else 'A BADDY'
  return '{} is {}'.format(s, txt)
  
def solution (data) :
  data.pop(0)
  result = [verify(s) for s in data]
  print('\n'.join(result))
  
solution(input_data)

