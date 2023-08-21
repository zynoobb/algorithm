const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const act = (arr) => {
  const matrix = arr.map((el)=> el.split(" ").map(Number))
  const [N,_] = matrix.shift()
  const graph = Array.from({length : N+1}, ()=> [])
  matrix.forEach((el)=> {
    [from,to] = el
    graph[from].push(to)
    graph[to].push(from)
  })
  const visited = Array.from({length : N+1}, ()=> false)
  visited[0] = true
  const queue = [1]
  let times = 0
  while(queue.length) {
    const node = queue.shift()
    if(!visited[node]) {
      visited[node] = true
      if(visited.filter(el => el === true).length === N + 1) return times
      graph[node].forEach((el)=> {
        if(!visited[el]) queue.push(el)
      })
      times ++
    }
  }

}

function solution(data) {
  const testCase = []

  for(let i = 0 ; i < data.length ; i++) {
    const [_,b] = data[i].split(" ").map(Number)
    testCase.push(data.slice(i, i + b + 1))
    i += b
  }

  const result = []
  testCase.forEach((el)=> result.push(act(el)))

  console.log(result.join('\n'))
}

solution(input)
