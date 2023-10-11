import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()
      
def solution (data) :
  n = int(data.pop(0))
  sums = sum(list(map(int, data[0].split())))
  total = sums + (n-1) * 8
  print('{} {}'.format(total // 24, total % 24))
  
solution(input_data)

