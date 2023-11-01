import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(int, data[1].split()))
  goal = [0]
  stack = []
  for v in arr :
    if goal[-1] + 1== v :
      goal.append(v)
    else : 
      stack.append(v)
      
    while stack :
      if goal[-1] + 1== stack[-1] :
        goal.append(stack.pop())
      else : break
      
  print('Nice' if not stack else 'Sad')
    
      
solution(input_data)