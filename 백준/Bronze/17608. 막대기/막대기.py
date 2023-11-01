import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  arr = list(map(int, data))
  arr.reverse()
  
  stack = [0]
  for v in arr :
    if v > stack[-1] :
      stack.append(v)
  
  print(len(stack) - 1)

solution(input_data)