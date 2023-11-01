import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  stack = []
  rest = 0
  for v in data :
    if v == '(' : stack.append(v)
    elif v == ')' : 
      if stack : stack.pop()
      else : rest += 1
  
  result = len(stack) + rest    
  print(result)
        
solution(input_data)