import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()
      
def solution (data) :
  n,m = map(int, data.split())
  
  matrix = {}
  matrix[0], matrix[1], i, j = 0, 1, 2, 2

  while(i <= 1000) :
    for _ in range(j) :
      matrix[i] = matrix[i-1] + j
      i += 1
    j += 1
  
  print(matrix[m] - matrix[n-1])
        
solution(input_data)
