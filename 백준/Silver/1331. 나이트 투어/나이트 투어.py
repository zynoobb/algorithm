import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  start = data.pop(0)
  visited = {start : True}
  pre_a, pre_n = start[0], int(start[1])
  
  for i in range(35) : 
    if visited.get(data[i], False) : 
      print('Invalid')
      return

    visited[data[i]] = True
    next_a,next_n = data[i][0], int(data[i][1])
    if verify(pre_a, pre_n, next_a, next_n) :
      pre_a, pre_n = next_a, next_n
    else : 
      print('Invalid')
      return
  
  print ('Valid' if verify(start[0], int(start[1]), pre_a, pre_n) else 'Invalid')
  
def verify (pre_a, pre_n, next_a, next_n) :
  dif_a = abs(ord(pre_a) - ord(next_a)) 
  dif_n = abs(pre_n - next_n)
  
  return 1 <= dif_a <= 2 and 1 <= dif_n <= 2 and dif_a + dif_n == 3
  
solution(input_data)

