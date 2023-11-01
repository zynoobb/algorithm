import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  E,S,M = map(int, data.split())
  years = [0 for _ in range(4)]
  limits = [15, 28, 19, False]
  
  while E != years[0] or S != years[1] or M != years[2] :  
    for i in range(4) : 
      years[i] += 1 
      if i == 3 : continue
      elif years[i] > limits[i] :
        years[i] = 1      
  
  print(years[3])
  
solution(input_data)

