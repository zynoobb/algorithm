import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  
  dic = {}
  for v in data :
    extend = v.split('.')[1]
    dic[extend] = dic.get(extend, 0) + 1
  
  entries = [[key, value] for key, value in dic.items()]
  result = list(map(lambda y : ' '.join(map(str,y)), sorted(entries, key= lambda x : x[0])))
  print('\n'.join(result))

solution(input_data)
