import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().strip()
    
def solution (data) :
  table = {}
  
  for x in range(8) :
    temp = bin(x)[2:].rjust(3,'0')
    table[x] = temp
  
  result = ''.join(list(map(lambda x : table[int(x)], list(data))))
  
  while (result[0] == '0' and not len(result) == 1) :
    result = result[1:]
    
  print(result)
    
solution(input_data)
