import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  table = {}
  
  i = 0
  for j in ['T','H'] :
    for k in ['T','H'] : 
      for l in ['T','H'] : 
        table[f'{j}{k}{l}'] = i
        i += 1
    
  result = list(map(lambda x : act(table, x), data))
  print('\n'.join(result))
  
def act(table, _str) :
  arr = [0 for _ in range(8)]
  for i in range(38) :
    temp = table[_str[i:i+3]]
    arr[temp] += 1
  return ' '.join(map(str, arr))

solution(input_data)