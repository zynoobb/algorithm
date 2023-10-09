import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  a,b = map(int, data) 
  table = {
    0 : lambda x,y : 'TroyMartian' if x >= 3 and 4 >= y  else None,
    1 : lambda x,y : 'VladSaturnian' if 6 >= x and y >= 2 else None,
    2 : lambda x,y : 'GraemeMercurian' if 2 >= x and 3 >= y else None
  }
  result = []
  for n in range(3) :
    if table[n](a,b) != None : result.append(table[n](a,b))

  if len(result) > 0 : print('\n'.join(result))
  
  
  
solution(input_data)
