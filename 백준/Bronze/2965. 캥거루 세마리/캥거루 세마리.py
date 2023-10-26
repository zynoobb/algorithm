import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  a,b,c = map(int, data.split())

  print(max(b - a,c - b) - 1)
      
solution(input_data)
