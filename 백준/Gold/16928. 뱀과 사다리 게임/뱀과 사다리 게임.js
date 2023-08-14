const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const BFS = (matrix) => {
  let visited = Array.from({length :101}, ()=> false)
  let queue = [[1,0]]

  while (queue.length) {
    const [location, times] = queue.shift()
    visited[location] = true
    for(let i = 1 ; i <= 6 ; i ++) {
      const nextLocation = location + i
      if(matrix[nextLocation] === 100) return times + 1
      else if(nextLocation > 100 || visited[nextLocation]) continue
      else {
        visited[nextLocation] = true
        queue.push([matrix[nextLocation], times + 1])
      }
    }
  }
}

function solution(data) {
  const tiles = data.map(el=> el.split(" ").map(Number))
  const matrix = Array.from({length : 101},(_,idx)=> idx)
  tiles.forEach((el)=> {
    const [start, end] = el
    matrix[start] = end
  })

  console.log(BFS(matrix))
}

solution(input)
