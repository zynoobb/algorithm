import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  result = list(map(lambda x : verify(x), data))
  print('\n'.join(result))
  
def verify (_str) :
  arr = list(map(int, _str.split()))
  a,b,c = sorted(arr)  
  
  if c >= a + b :
    return 'Invalid'
  elif a == b == c : 
    return 'Equilateral'
  elif a == b or b == c :
    return 'Isosceles'
  else :
    return 'Scalene'
  
solution(input_data)
