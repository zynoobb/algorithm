const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N,M] = input.shift().split(" ").map(Number)

const verify = (x,y) => {
  return x >= 0 && y >= 0 && x <= M-1 && y <= N-1
}

const BFS = (matrix,start) => {
  let visited = Array.from({length : N}, ()=> {
    return Array.from({length : M}, ()=> false)
  })

  let queue = [[0,start]]
  
  while (queue.length) {
    const [count, [x,y]] = queue.shift()
    if(visited[y][x]) continue
    else {
      visited[y][x] = true
      matrix[y][x] = count
      const direct = [[1,0],[0,1],[-1,0],[0,-1]]
      for(let i = 0 ; i < direct.length ; i++) {
        const [dx,dy] = direct[i]
        const [nextX, nextY] = [dx + x, dy + y]
        if(!verify(nextX,nextY)) continue
        else if(matrix[nextY][nextX] !== 0) {
          queue.push([count+1, [nextX, nextY]])
        }
      }
    }
  }
  return matrix
}

const findStarting = (matrix) => {
  let startingNode
  for(let i = 0 ; i < N ; i++) {
    for(let j = 0 ; j < M ; j++) {
      if(matrix[i][j] === 1) matrix[i][j] = -1
      if(matrix[i][j] === 2) startingNode = [j,i]
    }
  }
  return startingNode
}

function solution(data) {
  let matrix = data.map(el=>el.split(" ").map(Number))
  const startingNode = findStarting(matrix)
  const result = BFS(matrix, startingNode)
  console.log(result.map((el)=>el.join(" ")).join("\n"))
}

solution(input)
