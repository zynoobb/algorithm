import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  [[a,b],[k,x]] = map(lambda x : map(int, x.split()), data)
  result = 0
  for i in range(a,b+1) :
    if k-x <= i <= k+x : result += 1
  
  print(result if result else 'IMPOSSIBLE')
  
solution(input_data)
