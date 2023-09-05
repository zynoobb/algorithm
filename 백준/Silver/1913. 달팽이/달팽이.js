const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (N,x,y) => {
  return N > x && x >= 0 && N > y && y >= 0
}

function solution(data) {
  const [N, M] = data.map(Number)

  const matrix = Array.from({length : N}, ()=> {
    return Array.from({length : N}, ()=> 0)
  })

  let location = [0,0]
  const direct = [[0,1], [1,0], [0,-1], [-1,0]]
  let directIdx = 0
  let target 

  for(let i = N**2 ; i > 0 ; i--) {
    const [x,y] = location
    matrix[y][x] = i
    if(i === M) target = [y+1,x+1]

    const [dx, dy] = direct[directIdx%4]
    const [nx, ny] = [x + dx, y + dy]

    if(verify(N,nx,ny) && !matrix[ny][nx]) {
      location = [nx,ny]
    } else {
      const [dx, dy] = direct[++directIdx%4]
      const [nx, ny] = [x + dx, y + dy]
      location = [nx,ny]
    }
  }

  const result = [...matrix, target].map(el=>el.join(' '))
  console.log(result.join('\n'))
}

solution(input)
