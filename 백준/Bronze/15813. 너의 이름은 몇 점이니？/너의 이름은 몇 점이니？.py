import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  table = {}
  
  for i in range(26) :
    table[chr(65 + i)] = i + 1
  
  result = 0
  for v in data[1] : 
    result += table[v]
    
  print(result)
    
solution(input_data)