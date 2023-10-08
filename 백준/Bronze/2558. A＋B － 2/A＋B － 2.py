import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  n,m = map(int,data)
  print(n + m)
  
solution(input_data)