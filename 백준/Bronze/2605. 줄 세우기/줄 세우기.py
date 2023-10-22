import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [N], arr = map(lambda x : list(map(int,x.split())), data)
  
  result = [1]
  for i in range(1, N) :
    n = arr[i]
    if n == 0 : 
      result.append(i + 1)
    else : 
      _len = len(result) - n
      result = [*result[:_len], i + 1, *result[_len:]]
    
  print(' '.join(map(str,result)))
  
solution(input_data)