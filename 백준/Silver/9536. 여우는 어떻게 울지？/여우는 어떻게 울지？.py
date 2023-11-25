import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  testCase = []
  temp = []
  for v in data :
    if v != 'what does the fox say?' :
      temp.append(v)
    else : 
      testCase.append(temp)
      temp = []

  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(result))
  
def act(arr) :
  sounds = arr.pop(0).split()
  table = {}
  
  for v in arr : 
    table[v.split(' goes ')[1]] = True
    
  result = []
  for v in sounds :
    if not table.get(v, None) :
      result.append(v)
    
  return ' '.join(result)

solution(input_data)