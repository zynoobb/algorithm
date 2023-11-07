import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n = int(data)
  
  result = 0
  for i in range(1, n + 1) :
    for j in range(3, n + 1) :
      for k in range(2, n + 1, 2) :
        if j > i + 1 and i + j + k == n : 
          result += 1
    
  print(result)
  
solution(input_data)