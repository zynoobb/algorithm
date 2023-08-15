const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [X, Y] = input.shift().split(" ").map(Number)

const locationVerify = (y,x) => {
  return y >= 0 && x >= 0 && X-1 >= x && Y-1 >= y
}

const BFS = (map) => {
  const queue = []
  map.forEach((arr,y)=> {
    arr.forEach((el,x)=> {
      if(el === 1) queue.push([y,x,1])
    })
  })
  if(queue.length === 0) return -1

  let queueIdx = 0
  while(queue.length > queueIdx) {
    const [y,x,times] = queue[queueIdx]
    const direct = [[0,-1],[0,1],[-1,0],[1,0]]
    for(let i = 0 ; i < direct.length ; i++) {
      const [dy,dx] = direct[i]
      const [nextY, nextX] = [dy + y, dx + x]
      if(!locationVerify(nextY,nextX) || map[nextY][nextX] !== 0 || map[nextY][nextX] === -1) continue
      else {
        map[nextY][nextX] = times + 1
        queue.push([nextY, nextX, times + 1])
      }
    }
    queueIdx ++
  }
  return map
}

const matrixVerify = (matrix) => {
  let max = 1
  for(let i = 0 ; i < matrix.length ; i ++) {
    for(let j = 0 ; j < matrix[i].length ; j ++) {
      if(matrix[i][j] > max) max = matrix[i][j]
      else if(matrix[i][j] === 0) return -1
    }
  }
  return max -1
}

function solution(data) {
  const maps = data.map(el=>el.split(" ").map(Number))
  const matrix = BFS(maps)
  console.log(matrix === -1 ? -1 : matrixVerify(matrix))
}
  
solution(input)
