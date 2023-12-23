import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  n,m = map(int, data.pop(0).split())
  
  result = float('inf')
  for i in range(0, n-7) :
    for j in range(0, m-7) :
      black = white = 0
      for k in range(8) :
        temp = data[i+k][j:j+8]  
        for l in range(8) :
          if (l+k) % 2 == 0 : 
            if temp[l] == 'B' : black += 1
            else : white += 1
          else : 
            if temp[l] == 'W' : black += 1
            else : white += 1
      result = min(result, black, white)
  print(result)
  
solution(input_data)