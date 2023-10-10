import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()
    
def solution (data) :
  N,m,M,T,R = map(int, data.split())
  
  heart = m
  result = 0
  actionTime = 0
  while (actionTime < N) :
    if m + T > M :
      print(-1)
      return
    elif M >= heart + T :
      heart += T
      actionTime += 1
    else :
      heart = heart-R if heart - R >= m else m
      
    result += 1
    
  print(result)
        
solution(input_data)
