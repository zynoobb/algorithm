import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()
    
def solution (data) :
  data.pop(0)
  result = []
  for i,v in enumerate(data[::2]) :
    result.append(act(v, data[i*2+1]))
  print('\n'.join(map(str, result)))
  
def act (target_str, num_str) : 
  _, location = map(int ,target_str.split())
  queue = list(map(int, num_str.split()))
  sort = sorted(queue, reverse=True)
  sort_idx = 0
  max_v = sort[sort_idx]
  target_v = queue[location]
  queue[location] = 'a'
  count = 1

  while (True) :
    item = queue.pop(0)
    if item == 'a' and target_v == max_v :
      break
    elif item == max_v :
      count += 1
      sort_idx += 1
      max_v = sort[sort_idx]
    elif item != max_v :
      queue.append(item)
  return count

solution(input_data)
