import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
    
def act (a,b) :
  set_a = set(a)
  count = 0
  for v in b :
    if v in set_a : count +=1 
  return str(count)
  
def solution (data) :
  result = []
  for i,v in enumerate(data) :
    if len(v.split()) == 2 :
      n,m = map(int, v.split())
      if n == 0 and m == 0 : break
      result.append(act(data[i+1:i+n+1], data[i+n+1:i+n+m+1]))
      
  print('\n'.join(result))
  
solution(input_data)

