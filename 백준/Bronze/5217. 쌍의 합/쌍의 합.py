import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(int, data))
  arr.pop(0)
  
  result = list(map(lambda x : act(x), arr))
  print('\n'.join(result))
  
def act (n) :
  storage = []
  
  for i in range(1, 13) :
    for j in range(i + 1, 13) :
      if i + j == n : storage.append(f"{i} {j}")
      elif i + j > n : break
  
  return f"Pairs for {n}: " + ', '.join(storage)
  
solution(input_data)
