import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [T,N],numbers = arr
  storage = []
  
  def recursive (n) :
    if n > T : return 
    
    for num in numbers : 
      next = n * 10 + num
      if T >= next : 
        storage.append(next)
        recursive(next)
        
  for num in numbers : 
    storage.append(num)
    recursive(num)
  
  storage.sort()
  print(storage[-1] if len(storage) else 0)
  
solution(input_data)