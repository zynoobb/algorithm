import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  tc = []
  temp = []
  for v in data :
    if v != '# 0' : temp.append(v)
    else : 
      tc.append(temp)
      temp = []

  result = list(map(lambda x : act(x[0] + 1, x[1]),enumerate(tc)))
  print('\n'.join(result))
      
def act (i, arr) : 
  n, m = map(int, arr.pop(0).split())
  for v in arr :
    a, t = v.split()
    m += int(t) if a == 'F' else -int(t)
    if 0 >= m : return f'{i} RIP'
  
  state = ':-)' if n // 2 < m < n * 2 else ':-('
  return f'{i} {state}'

solution(input_data)