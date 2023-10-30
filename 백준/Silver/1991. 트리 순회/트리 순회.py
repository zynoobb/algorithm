import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
  data.pop(0)
  graph = makingGraph(data)
  storage = [[],[],[]]
  
  preOrder(graph, saveNode(storage[0]))
  inOrder(graph, saveNode(storage[1]))
  postOrder(graph, saveNode(storage[2]))
  
  result = list(map(lambda x : ''.join(x), storage))
  print('\n'.join(result))
  
def makingGraph (data) :
  _graph = {}
  for _str in data :
    root, left, right = _str.split()
    left = left if left != '.' else None
    right = right if right != '.' else None
    _graph[root] = [left, right]
  return _graph

def saveNode (storage) :
  return lambda node : storage.append(node)

def preOrder(graph, save, node='A') :
  if not node : return
  save(node)
  preOrder(graph, save, graph[node][0])
  preOrder(graph, save, graph[node][1])
  
def inOrder (graph, save, node='A') :
  if not node : return
  inOrder(graph, save, graph[node][0])
  save(node)
  inOrder(graph, save, graph[node][1])
  
def postOrder(graph, save, node='A') :
  if not node : return
  postOrder(graph, save, graph[node][0])
  postOrder(graph, save, graph[node][1])
  save(node)
  
solution(input_data)

