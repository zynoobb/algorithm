import sys
temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = temp.read().strip()
      
def solution (data) :
  if 3 > len(data) :
    print('◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!')
    return
  
  lst = list(map(int, data))
  dif = lst[0] - lst[1]
  result = True
  for i in range(1, len(data) -1):
    if dif != lst[i] - lst[i+1] : 
      result = False
      break
    
  print('◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!' if result else '흥칫뿡!! <(￣ ﹌ ￣)>')
  
solution(input_data)
