import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  N = int(data.pop(0))
  testCases = []
  for i in range(0, len(data), 4) :
    testCases.append(data[i:i+4])
  
  result = []
  for arr in testCases :
    result += act(arr)
    
  print('\n'.join(result))
  
def act (arr) :
  _, a, __, b = [list(map(int, v.split())) for v in arr]
  _a = set(a)
  arr = ['1' if v in _a else '0' for v in b]
  return arr

    
solution(input_data)
