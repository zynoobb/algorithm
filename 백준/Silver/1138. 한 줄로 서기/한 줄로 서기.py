import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [N], arr = map(lambda x : list(map(int, x.split())), data)
  result = [0] * N
  
  for i in range(N) :
    empty = 0
    for j in range(N) :
      if empty == arr[i] and result[j] == 0 :
        result[j] = i + 1
        break
      elif result[j] == 0 :
        empty += 1
  print(*result)
    
solution(input_data)