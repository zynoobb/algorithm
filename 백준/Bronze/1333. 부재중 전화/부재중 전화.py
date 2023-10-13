import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()
    
def solution (data) :
  N,L,D = map(int, data.split())
  temp = 0
  result = None
  for _ in range(N) :
    if result : break
    temp += L
    for __ in range(5) :
      if temp % D == 0 : 
        result = temp
        break
      temp += 1
  
  if not result :
    running = N * L + (N-1) * 5
    i = 1
    while(not result) : 
      if (running + i) % D == 0 :
        result = running + i
      i += 1

  print(result)

solution(input_data)
