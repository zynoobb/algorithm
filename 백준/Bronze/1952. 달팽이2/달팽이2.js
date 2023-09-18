const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N,M] = data.split(' ').map(Number)
  const matrix = Array.from({length : N}, ()=> {
    return Array.from({length : M}, ()=> false)
  })
  matrix[0][0] = true

  let location = [0,0]
  const directions = [[1,0],[0,1],[-1,0],[0,-1]]
  let directionIdx = 0

  const verify = (x,y) => {
    return N > y && M > x && x >= 0 && y >= 0
  }

  for(let i = 0 ; i < N * M ; i ++) {
    const [x,y] = location
    const [dx,dy] = directions[directionIdx%4]
    const [nx,ny] = [dx+x, dy+y]
    if(verify(nx,ny) && !matrix[ny][nx]) {
      matrix[ny][nx] = true
      location = [nx,ny]
    } else {
      const [dx,dy] = directions[++directionIdx%4]
      const [nx,ny] = [dx+x, dy+y]
      matrix[ny][nx] = true
      location = [nx,ny]
    }
  } 
  console.log(directionIdx -1)
}

solution(input)
