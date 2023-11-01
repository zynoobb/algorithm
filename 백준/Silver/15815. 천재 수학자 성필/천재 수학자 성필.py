import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().rstrip()

def solution (data) :
  stack = []
  
  table = {
    ('+') : lambda x,y : x + y,
    ('-') : lambda x,y : x - y,
    ('*') : lambda x,y : x * y,
    ('/') : lambda x,y : x // y
  }
  
  for v in data :
    if v.isdigit() :
      stack.append(int(v))
    else :
      a,b = stack.pop(),stack.pop()
      stack.append(table[v](b,a))
  
  print(stack[0])
      
solution(input_data)