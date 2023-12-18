import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  N = int(data[0])
  
  storage = []
  def act (n) :
    if n > 9876543210 : return
    storage.append(n)
    limit = int(str(n)[-1])
    for i in range(limit) : 
      act(n * 10 + i)
  
  for i in range(10) :
    act(i)
  
  storage.sort()
  print(storage[N] if N < len(storage) else -1)
          
solution(input_data)