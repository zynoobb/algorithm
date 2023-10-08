import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read()

def solution (data) :
  table = {}
  for s in data : 
    table[s] = table.get(s, 0) + 1
    
  arr = ['M','O','B','I','S']
  # result = 0
  # for s in arr :
    # if s in table : result += 1
  result = sum(1 for s in arr if s in table)
  
  print('YES' if result == 5 else 'NO')

solution(input_data)
