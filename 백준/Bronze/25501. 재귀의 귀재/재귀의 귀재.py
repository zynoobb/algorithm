import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)  
  result = [isPalindrome(v) for v in data]
  print('\n'.join(result))
  
def isPalindrome (s) : 
  return recursive(s,0,len(s)-1,1)
  
def recursive (s,left,right,time) :
  if left >= right : return '1 {}'.format(time)
  elif s[left] != s[right] : return '0 {}'.format(time)
  else : return recursive(s,left+1,right-1,time+1)
  
solution(input_data)