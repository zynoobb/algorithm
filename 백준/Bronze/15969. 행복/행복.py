import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
    
def solution (data) :
  data.pop(0)
  scores = list(map(int, data[0].split()))
  max = 0
  min = 1001
  
  for s in scores :
    if s > max : max = s
    if min > s : min = s
    
  print(max - min)
  
solution(input_data)

