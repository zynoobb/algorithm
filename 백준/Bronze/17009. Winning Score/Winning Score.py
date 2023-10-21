import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  scores = list(map(int, data))
  a_score, b_score = calc(scores[:3]), calc(scores[3:])
  print('A' if a_score > b_score else 'B' if b_score > a_score else 'T')
  
def calc (arr) :
  points = [3,2,1]
  sum = 0
  for i in range(3) :
    sum += arr[i] * points[i]
  return sum

solution(input_data)
