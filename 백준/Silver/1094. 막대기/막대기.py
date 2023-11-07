import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  _bin = bin(int(data))
  print(_bin.count('1'))
  
solution(input_data)