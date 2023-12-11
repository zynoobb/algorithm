import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  arr = [list(map(int, v.split())) for v in data]
  [n,s],numbers = arr[0],arr[1]
  result = 0
  
  def DFS (idx, sum) :
    nonlocal result
    
    if idx >= n : return
    sum += numbers[idx]
    if sum == s : result += 1
    
    DFS(idx+1, sum) # 현재 수 포함
    DFS(idx+1, sum - numbers[idx]) # 현재 수 배제
    
  DFS(0,0)  
  print(result)
    
solution(input_data)
