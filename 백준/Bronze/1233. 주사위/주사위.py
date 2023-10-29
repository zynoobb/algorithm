import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  a,b,c = map(int, data.split())
  dic = {}
  
  for i in range(a) :
    for j in range(b) :
      for k in range(c) : 
        temp = i + j + k + 3
        dic[temp] = dic.get(temp, 0) + 1
    
  _max, result = 0, 0

  for i in range(3, a+b+c+1) :
    if dic[i] > _max : 
      _max = dic[i]
      result = i
    else : break
  
  print(result)
  
solution(input_data)

