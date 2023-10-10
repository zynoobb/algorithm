import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  data.pop(0)
  lst = list(map(int, data[0].split()))
  milks = [0,1,2]
  result = 0
  
  for v in lst :
    if v == milks[result%3] :
      result += 1
  
  print(result)
        
solution(input_data)
