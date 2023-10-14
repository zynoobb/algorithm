import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  data.pop(0)
  [a,b],arr = list(map(lambda x : list(map(int, x.split())), data))
  person, reduce, result = a * b, 0, None
  sort = sorted(arr, reverse=True)
  
  for i, v in enumerate(sort) :
    reduce += v 
    if reduce >= person : 
      result = i + 1
      break
    
  print(result if result else 'STRESS')
  
    
solution(input_data)
