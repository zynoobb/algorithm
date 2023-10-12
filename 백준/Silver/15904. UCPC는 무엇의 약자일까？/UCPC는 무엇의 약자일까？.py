import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().strip()
    
def solution (data) :
  result = []
  upperStr = [v for v in data if v.isupper()]
  
  for s in upperStr :
    if len(result) == 0 :
      if s == 'U' : result.append(s)
    else :
      if s == 'C' and (result[-1] == 'U' or result[-1] == 'P'):
        result.append(s)
      if s == 'P' and len(result) == 2 :
        result.append(s)
      
  print('I love UCPC' if len(result) == 4 else 'I hate UCPC')
   
solution(input_data)

