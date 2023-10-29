import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read()

def solution (data) :
  mbti = {}
  _a, _b = 'ESTJ', 'INFP'
  for i in range(4) :
    mbti[_a[i]] = _b[i]
    mbti[_b[i]] = _a[i]
  
  result = ''
  for s in data.strip() : 
    result += mbti[s]
  
  print(result)
  

solution(input_data)

