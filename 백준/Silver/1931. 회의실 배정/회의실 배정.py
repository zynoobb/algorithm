import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n = int(data.pop(0))
  arr = [list(map(int, x.split())) for x in data]
  _sort = sorted(arr, key = lambda x : (x[1], x[0]))
  
  result = [0]
  for i in range(n) :
    if _sort[i][0] >= result[-1] :
      result.append(_sort[i][1])
  
  print(len(result) - 1)

solution(input_data)