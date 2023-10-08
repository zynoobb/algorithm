import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (_) :
  for _ in range(2):
    print('강한친구 대한육군')
  
solution(input_data)