import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
      
def solution (data) :
  _,m = map(int, data.pop(0).split())
  arr = list(map(int, data[0].split(',')))
  
  t = 0
  while(t < m) :
    temp = []
    for v in range(len(arr) - 1) :
      temp.append(arr[v+1] - arr[v])
    arr = temp
    t += 1
    
  print(','.join(map(str,arr)))
      
        
solution(input_data)
