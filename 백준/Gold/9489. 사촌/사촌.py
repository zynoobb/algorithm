import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  testCase = []
  for i in range(0,len(data),2) :
    if data[i] == '0 0' : break
    temp = [list(map(int, v.split()))for v in data[i:i+2]]
    testCase.append(temp)
  
  result = list(map(lambda x : act(x), testCase))
  print('\n'.join(map(str, result)))
  
def act (arr) :
  [N,T], numbers = arr
  roots = {}
  idx = 0
  roots[numbers[0]] = -1
  for i in range(1,N) :
    roots[numbers[i]] = numbers[idx]
    if i < N-1 and numbers[i]+1 < numbers[i+1] :
      idx += 1
  
  cnt = 0
  for i in range(1,N) :
    if roots[roots[T]] == roots[roots[numbers[i]]] : 
      if roots[T] != roots[numbers[i]] :
        cnt += 1
  
  return cnt
  
solution(input_data)