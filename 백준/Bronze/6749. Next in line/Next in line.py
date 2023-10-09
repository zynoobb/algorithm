import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  a,b = map(int,data)
  print(b * 2 - a)

solution(input_data)
