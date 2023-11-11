def solution(n, results):
  graph = [[float('inf')] * (n+1) for _ in range(n+1)]
  for i in range(1,n+1) :
    graph[i][i] = 0
    
  for winner, loser in results :
    graph[winner][loser] = 1
  
  for i in range(1, n+1) : 
    for j in range(1, n+1) : 
      for k in range(1, n+1) : 
        graph[j][k] = min(graph[j][k], graph[j][i] + graph[i][k])
  
  result = 0
  for i in range(1, n+1) :
    count = 0
    for j in range(1, n+1) :
      if graph[i][j] != float('inf') or graph[j][i] != float('inf') :
        count += 1
    if count == n  :
      result += 1
  
  return result