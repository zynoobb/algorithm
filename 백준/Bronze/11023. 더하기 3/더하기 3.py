import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  arr = sum(map(int, data.split()))
  print(arr)
    
solution(input_data)