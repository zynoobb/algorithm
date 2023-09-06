function solution(n, edge) {
  const graph = Array.from({length : n+1}, ()=> [])
  edge.forEach(el=> {
    const [from, to] = el
    graph[from].push(to)
    graph[to].push(from)
  })
  
  const distances = Array.from({length : n+1}, ()=> 0)
  const BFS = () => {
    const queue = [[1,1]]

    while(queue.length) {
      const [node, distance] = queue.shift()
      if(distances[node]) continue

      distances[node] = distance
      
      for(let i = 0 ; i < graph[node].length ; i++) {
        if(distances[node][i]) continue
        else queue.push([graph[node][i], distance + 1])
      }
    }
  }

  BFS()

  const result = distances.filter(x => x === Math.max(...distances))
  return result.length
}