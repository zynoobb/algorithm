import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  storage = [[] for _ in range(4)]
  for i in range(4) :
    temp = act(data[i])
    for j in range(4) :
      if i == 2 : storage[j].append(' ')
      storage[j].append(temp[j])

  result = list(map(lambda x : ' '.join(x), storage))
  print('\n'.join(result))

def act (n) :
  return ['*' if i == '1' else '.' for i in bin(int(n))[2:].zfill(4)]
  
solution(input_data)