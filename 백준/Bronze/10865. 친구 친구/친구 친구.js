const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [N,_] = data.shift().split(' ').map(Number)

  const graph = Array.from({length : N}, ()=> 0)
  
  data.forEach(el=> {
    const [from, to] = el.split(' ')
    graph[from -1] ++
    graph[to -1] ++
  })

  console.log(graph.join('\n'))
}

solution(input)