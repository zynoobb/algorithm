import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  [n,m], temp = map(lambda x : list(map(int, x.split())),data)
  arr = sorted(temp)
  result, storage = [],[]
  
  def backTracking () :
    if len(storage) == m :
      result.append(' '.join(map(str, storage)))
      return
    
    for i in range(0, n) :
      storage.append(arr[i])
      backTracking()
      storage.pop()
  backTracking()
  
  print('\n'.join(result))
 
solution(input_data)
