import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  a,b = map(lambda x : bin(int(x))[2:].zfill(11)[::-1], data.split())
  
  result = 0
  for i in range(10) :
    if a[i] != b[i] : result += 2 ** i
    
  print(result)
  
  
solution(input_data)