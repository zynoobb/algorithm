import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().splitlines()

def solution (data) :
  coupon, price = map(int, data)
  result = []
  priceLst = [0,5,10,15,20]
  table = {
    '0' : lambda x : x,
    '1' : lambda x : int(x - 500),
    '2' : lambda x : int(x * 0.9),
    '3' : lambda x : int(x - 2000),
    '4' : lambda x : int(x * 0.75)
  }
  
  for v in range(5) :
    if coupon >= priceLst[v] : 
      result.append(table[str(v)](price))
      
  print(min(result) if min(result) >= 0 else 0)
    
solution(input_data)
