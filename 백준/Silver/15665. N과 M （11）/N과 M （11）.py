import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [_,M], arr = map(lambda x : list(map(int, x.split())), data)
  _set = list(set(arr))
  _set.sort()
  
  result, storage = [], []
  dupTable = {}
  
  def backTracking () :
    if len(storage) == M :
      temp = ' '.join(map(str,storage))
      if not dupTable.get(temp,None) :
        result.append(temp)
      return
    
    for i in range(len(_set)) :
      storage.append(_set[i])
      backTracking()
      storage.pop()
        
  backTracking()
  
  print('\n'.join(result))
    
solution(input_data)