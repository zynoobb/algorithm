import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  data.pop(0)
  tc = list(map(lambda x : list(map(int, x.split())),data))
  result = list(map(lambda x : act(x), tc))
  print('\n'.join(map(str,result)))
  
def act (arr) :
  a,b,c = arr
  count = 0
  for x in range(1, a + 1) :
    for y in range(1, b + 1) :
      for z in range(1, c + 1) :
        if x % y == y % z and y % z == z % x : count += 1
        
  return count
  
solution(input_data)
