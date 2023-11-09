import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = list(map(lambda x : list(map(int, x.split())), data))
  n, _ = arr.pop(0)
  
  trains = [0] * (n+1)
  
  for cmd in arr :
    order, train_num = cmd[0], cmd[1]
    temp = None
    if 2 >= cmd[0] :
      seat = cmd[2] - 1
      temp = trains[train_num] | (1 << seat) if order == 1 else trains[train_num] & ~(1 << seat)      
    else :
      temp = trains[train_num] << 1 if order == 3 else trains[train_num] >> 1
      if temp & (1 << 20) : temp &= ~(1 << 20)
    trains[train_num] = temp
    
  result = 0
  storage = {}
  for v in trains[1:] :
    if not storage.get(v, False) :
      storage[v] = True
      result += 1
  
  print(result)
            
solution(input_data)
