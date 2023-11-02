import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,s,p = list(map(int, data[0].split()))
  
  if n == 0 :
    print(1)
    return
  
  scores = list(map(int, data[1].split()))
  
  for i in range(n) :
    if s > scores[i] or n - 1 == i :
      if s > scores[i] : 
        scores.insert(i, 'a')
      else :
        scores.insert(i+1, 'a')
      
      if len(scores) > p :
        scores = scores[:-1]
      break
  
  if s in scores and 'a' in scores : 
    print(scores.index(s) + 1)
  elif not s in scores and 'a' in scores : 
    print(scores.index('a') + 1)
  else : 
    print(-1)
  
    
solution(input_data)