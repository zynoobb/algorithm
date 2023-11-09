import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  arr = list(map(lambda x : list(map(int, x.split())), data))
  result = [0 for _ in range(n)]
  for i in range(n) :
    for j in range(n) :
      if i == j : continue
      result[i] |= arr[i][j]
  
  print(* result)
      
solution(input_data)
