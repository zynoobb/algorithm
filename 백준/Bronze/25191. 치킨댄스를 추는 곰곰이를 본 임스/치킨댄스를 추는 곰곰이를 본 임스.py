import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  a,b = map(int, data[0].split())
  
  temp = a // 2 + b
  print(temp if n > temp else n)
  
solution(input_data)
