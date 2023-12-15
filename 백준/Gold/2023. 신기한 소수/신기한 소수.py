import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  K = int(data[0])
  result = []
  
  def isPrime (n) : 
    if n <= 1 : return False
    for i in range(2, int(n ** 0.5) + 1) :
      if n % i == 0 : return False
    return True
    
  def DFS(n) :
    if K == len(str(n)) : 
      result.append(n)
    else :
      for i in range(1, 10) : 
        temp = n * 10 + i
        if isPrime(temp) : DFS(temp)
  
  for i in range(2, 10) :
    if isPrime(i) : DFS(i)
  
  print('\n'.join(map(str, result)))
  
solution(input_data)