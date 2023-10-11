import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def act (n) :
  arr = []
  for x in range(1, int(n/2)+1) :
    if n % x == 0 : arr.append(x)
  
  if sum(arr) == n :
    return '{} = '.format(n) + ' + '.join(map(str,arr))
  else : 
    return '{} is NOT perfect.'.format(n)
      
def solution (data) :
  data.pop()
  result = list(map(lambda x : act(int(x)), data))
  print('\n'.join(result))
        
solution(input_data)
