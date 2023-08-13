const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N, _, start] = input.shift().split(" ").map(Number)

const DFS = (graph, start) => {
  const visited = []
  let stack = [start]
  while(stack.length !== 0) {
    const node = stack.pop()
    if(!visited.includes(node)) {
      visited.push(node)
      const nextNodes = graph[node].sort((a,b)=> b-a)
      stack = [...stack, ...nextNodes]
    }
  }
  return visited
}

const BFS = (graph, start) => {
  const visited = []
  let queue = [start]
  while(queue.length !== 0) {
    const node = queue.shift()
    if(!visited.includes(node)) {
      visited.push(node)
      const nextNode = graph[node].sort((a,b)=> a-b)
      queue = [...queue, ...nextNode]
    }
  }
  return visited
}

function solution(data) {
  const graph = Array.from({length : N + 1}, ()=> [])
  
  data.forEach((el)=> {
    const [from, to] = el.split(" ").map(Number)
    graph[from].push(to)
    graph[to].push(from)
  })
  
  const result = [DFS(graph, start), BFS(graph, start)]
  console.log(result.map(el=>el.join(" ")).join("\n"))
}

solution(input)
