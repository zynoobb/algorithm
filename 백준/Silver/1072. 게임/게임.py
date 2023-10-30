import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  x,y = map(int, data.split())
  z = (100 * y) // x
  left, right, min = 0,x,x

  if z >= 99 : 
    print(-1)
    return
  
  while (left <= right) :
    mid = (left + right) // 2
    if winningRate(x,y,mid) > z :
      min = mid
      right = mid - 1
    else : 
      left = mid + 1
      
  print(min)
  
def winningRate (x,y,mid) :
  return 100 * (y + mid) // (x + mid)
  
solution(input_data)

