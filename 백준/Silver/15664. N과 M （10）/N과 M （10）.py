import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [N,M], arr = map(lambda x : list(map(int, x.split())), data)
  arr.sort()
  
  result, storage = [], []
  visited = [False] * N
  
  def backTracking (k) :
    if len(storage) == M :
      temp = ' '.join(map(str,storage))
      if not temp in result :
        result.append(temp)
      return
    
    for i in range(k,N) :
      if not visited[i] :
        visited[i] = True
        storage.append(arr[i])
        backTracking(i)
        storage.pop()
        visited[i] = False
        
  backTracking(0)
  
  print('\n'.join(result))
    
solution(input_data)