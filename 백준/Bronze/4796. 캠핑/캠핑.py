import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
      
def act (arr, idx) :
  l, p, v = arr
  trips = (v // p) * l
  v %= p
  return 'Case {}: '.format(idx+1) + str(trips + min(l,v))
  
  
      
def solution (data) :
  data.pop()
  result = list(map(lambda x : act(list(map(int, x[1].split())), x[0]), enumerate(data)))
  print('\n'.join(result))
      
        
solution(input_data)
