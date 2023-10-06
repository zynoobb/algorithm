const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [N, temp, _, ...arr] = data
  const [target1,target2] = temp.split(' ').map(Number)
  
  const graph = Array.from({length : +N+1}, ()=> [])
  arr.forEach(el => {
    const [mother, son] = el.split(' ').map(Number)
    graph[mother].push(son)
    graph[son].push(mother)
  })
  
  const BFS = (startNode) => {
    const visited = []
    const queue = [[startNode,0]]

    while(queue.length) {
      const [node, times] = queue.shift()
      if(!visited.includes(node)) {
        visited.push(node)
        for(let i = 0 ; i < graph[node].length ; i ++) {
          if(graph[node][i] === target2) return times + 1
          if(!visited.includes(graph[node][i])) queue.push([graph[node][i], times + 1])
        }
      }
    }
    return -1
  }

  const result = BFS(target1)
  console.log(result)
}

solution(input)  
