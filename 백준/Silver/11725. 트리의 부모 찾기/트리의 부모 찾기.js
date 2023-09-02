const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  const graph = Array.from({length : +N+1}, ()=> [])
  data.forEach((el)=> {
    const [to,from] = el.split(' ').map(Number)
    graph[to].push(from)
    graph[from].push(to)
  })
  
  const result = Array.from({length : +N+1}, ()=> 0)
  result[1] = true

  const BFS = (start) => {
    let queue = [start]

    while(queue.length) {
      const node = queue.shift()

      for(let i = 0 ; i < graph[node].length ; i++) {
        const nextNode = graph[node][i]
        if(!result[nextNode]) {
          result[nextNode] = node
          queue.push(nextNode)
        }
      }
    }
  }

  BFS(1)

  console.log(result.slice(2).join('\n'))
}

solution(input)

