import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def act (st) :
  arr = [0,0,0,0]
  for v in st :
    if v.islower() : arr[0] += 1
    elif v.isupper() : arr[1] += 1
    elif v.isdigit() : arr[2] += 1
    elif v.isspace() : arr[3] += 1
  return ' '.join(map(str, arr))
    
def solution (data) :
  result = [act(v) for v in data]
  print('\n'.join(result))
        
solution(input_data)
