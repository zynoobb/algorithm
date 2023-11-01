import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  arr = list(data.pop(0))
  dic = {}
  i = 0
  for v in arr :
    if v.isalpha() and not dic.get(v, None) :
      dic[v] = int(data[i])
      i += 1
    
  stack = []
  
  table = {
    ('+') : lambda x,y : x + y,
    ('-') : lambda x,y : x - y,
    ('*') : lambda x,y : x * y,
    ('/') : lambda x,y : x / y
  }
  
  for v in arr :
    if v.isalpha() :
      stack.append(dic[v])
    else :
      a,b = stack.pop(),stack.pop()
      stack.append(table[v](b,a))
  
  result = stack[0]
  print('{:.2f}'.format(result))
      
solution(input_data)