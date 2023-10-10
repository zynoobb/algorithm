import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
    
def solution (data) :
  m, _ = map(int,data.pop(0).split())
  lst = [v + 1 for v in range(m)]
  
  for el in data :
    a,b = map(lambda x : int(x)-1, el.split())
    temp = lst[a]
    lst[a] = lst[b]
    lst[b] = temp
    
  print(' '.join(map(str,lst)))
        
solution(input_data)
