import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()

def solution (data) :
  a,b = map(int,data.split())
  print(a+b if a > b else b-a)

solution(input_data)
