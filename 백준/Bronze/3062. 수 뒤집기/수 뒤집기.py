import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
  
def act (n) :
  sumString = str(int(n) + int(n[::-1]))
  for s in range(len(sumString)//2) :
    if sumString[s] != sumString[-1 -s] :
      return 'NO'
  return 'YES'
  
def solution (data) :
  data.pop(0)
  result = [act(v) for v in data]
  print('\n'.join(result))
  
solution(input_data)

