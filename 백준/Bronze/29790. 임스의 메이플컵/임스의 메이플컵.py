import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()

def solution (data) :
  n,u,l = map(int, data.split())
  
  if n >= 1000 and (u >= 8000 or l >= 260) :
    print('Very Good')
  elif n >= 1000 : print('Good')
  else : print('Bad')
    
solution(input_data)
