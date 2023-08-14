const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N, _] = input.shift().split(" ").map(Number)

function solution(data) {
  const graph = Array.from({length : N+1}, ()=> [])
  data.forEach((el)=> {
    const [from, to] = el.split(" ").map(Number)
    graph[from].push(to)
    graph[to].push(from)
  })
  let visited = Array.from({length : N+1}, ()=> false)

  const DFS = (n) => {
    visited[n] = true
    graph[n].forEach((nextNode)=> {
      if(!visited[nextNode]) DFS(nextNode)
    })
  }

  let result = 0
  for(let i = 1 ; i <= N ; i++) {
    if(!visited[i]) {
      DFS(i)
      result ++
    }
  }

  console.log(result)
}

solution(input)
