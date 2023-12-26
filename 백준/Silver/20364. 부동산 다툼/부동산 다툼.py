import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  arr = list(map(int, data))
  visited = {}
  
  def DFS (n) :
    node = n
    answer = 0
    while node > 0 :
      if visited.get(node, None) :
        answer = node
      node //= 2

    if answer == 0 :
      visited[n] = True
    return answer
    
  result = []
  for duck in arr :
    result.append(DFS(duck))
    
  print('\n'.join(map(str,result)))
     
solution(input_data)