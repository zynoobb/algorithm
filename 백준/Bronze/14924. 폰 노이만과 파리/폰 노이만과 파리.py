import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()

def solution (data) :
  s,t,d = map(int, data.split())
  trainsTime = d / (s * 2)
  result = int(trainsTime * t)
  print(result)
  
solution(input_data)
