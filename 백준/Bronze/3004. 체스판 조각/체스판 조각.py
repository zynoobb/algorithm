import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  n = int(data)
  units = n // 2 + 1
  print(units * (units + 1) if n % 2 != 0 else units ** 2)

solution(input_data)

# 1 2 
# 2 4

# 3 6
# 4 9

# 5 12
# 6 16

# 7 20
# 8 25

# 9 30
# 10 36
