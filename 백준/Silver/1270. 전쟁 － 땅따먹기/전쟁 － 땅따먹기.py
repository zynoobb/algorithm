import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  testCase = [list(map(int, v.split())) for v in data]
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(result))

def act (arr) :
  n = arr.pop(0)
  table = {}
  for v in arr :
    table[v] = table[v] + 1 if table.get(v, None) else 1

  maxValue = max(table.values())
  maxKey = max(table, key=table.get)
  return str(maxKey) if maxValue > n // 2 else 'SYJKGW'
  
  
solution(input_data)
