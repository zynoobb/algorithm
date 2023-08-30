const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [X,Y] = input.shift().split(' ').map(Number)

const verify = (x,y) => {
  return x > 0 && y > 0 && X >= x && Y >= y
}

function solution(data) {
  const K = + data[0]

  const table = {}
  let location = [1,1]
  const direction = [[0,1],[1,0],[0,-1],[-1,0]]
  let directionIdx = 0

  for(let i = 1 ; i <= X * Y ; i ++) {
    const [x,y] = location
    if(i === K) return [x,y].join(' ')
    
    table[`${x}:${y}`] = i

    const [dx,dy] = direction[directionIdx%4]
    const [nextX, nextY] = [dx + x, dy + y]

    if(!table[`${nextX}:${nextY}`] && verify(nextX, nextY)) {
      location = [nextX, nextY]
    } else {
      const [dx,dy] = direction[++directionIdx%4]
      const [nextX, nextY] = [dx + x, dy + y]
      location = [nextX, nextY]
    }
  }
}

console.log(X * Y < input[0] ? 0 : solution(input))

