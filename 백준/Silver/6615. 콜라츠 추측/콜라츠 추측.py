import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop()
  result = list(map(lambda x : act(x), data))
  print('\n'.join(result))
  
def act (_str) :
  a,b = list(map(int, _str.split()))
  table_a, table_b = makingTable(a), makingTable(b)
  _duplicate = list(set(table_a.keys()) & set(table_b.keys()))
  
  min_n, min_key, other_value = None, None, None
  min_time = len(table_b) if len(table_b) > len(table_a) else len(table_a)
  
  for key in _duplicate :
    for i, value in enumerate([table_a[key], table_b[key]]) :
      if min_time > value :
        min_time, min_key = value, key
        min_n = 'A' if i == 0 else 'B'
        other_value = table_b[key] if i == 0 else table_a[key]
  
  arr = [a, table_a[min_key] if min_n == 'A' else other_value, b, table_b[min_key] if min_n == 'B' else other_value ,min_key]
  return '{} needs {} steps, {} needs {} steps, they meet at {}'.format(*arr)

def makingTable (n) :
  table = {n : 0}
  time = 1
  while n != 1 :
    if n % 2 == 0 :
      n = int(n / 2)
      if not table.get(n, None) :
        table[n] = time
    else : 
      n = int(n * 3 + 1)
      if not table.get(n, None) :
        table[n] = time
    time += 1
  
  return table
    
solution(input_data)