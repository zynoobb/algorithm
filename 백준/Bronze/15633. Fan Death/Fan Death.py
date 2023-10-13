import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()
    
def solution (data) :
  n = int(data)
  result = n
  for i in range(1, n//2 + 1) : 
    if n % i == 0 : result += i
    
  print(5 * result - 24)

solution(input_data)
