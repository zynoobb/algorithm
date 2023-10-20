import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  dp = [[int(data)]]
  dupTable = {int(data) : True}
  
  
  i = 0
  while not 1 in dp[i] :
    temp = []
    for j in dp[i] :
      for k in range(2,4) :
        _n = int(j // k)
        if j % k == 0 and not dupTable.get(_n, None) :
          dupTable[_n] = True
          temp.append(_n)
            
      if not dupTable.get(j-1, None) :
        dupTable[j-1] = True
        temp.append(j-1)
        
    dp.append(temp)
    i += 1

  print(i)

solution(input_data)
