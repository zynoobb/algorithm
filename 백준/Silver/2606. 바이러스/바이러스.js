const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


const DFS = (graph, start,N) => {
  let visited = Array.from({length : +N+1}, ()=> false)
  let result = []
  let stack = [start]

  while(stack.length) {
    const node = stack.pop()
    if(!visited[node]) {
      visited[node] = true
      result.push(node)
      
      const nextNodes = graph[node].sort((a,b)=> b-a)
      stack = [...stack, ...nextNodes]
    }
  }
  return result.length - 1
}

function solution(data) {
  const [N, _, ...arr] = data
  const graph = Array.from({length : +N+1}, ()=> [])
  arr.forEach((el)=> {
    const [from, to] = el.split(" ").map(Number)
    graph[from].push(to)
    graph[to].push(from)
  })
  
  console.log(DFS(graph,1,N))
}

solution(input)
