const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [Y,X] = data.shift().split(' ').map(Number)
  const visited = Array.from({length : Y}, ()=> {
    return Array.from({length : X}, ()=> false)
  })

  const verify = (x,y) => {
    return X > x && x >= 0 && Y > y && y >= 0
  }

  const DFS = (x,y,stick) => {
    visited[y][x] = true
    const direction = stick === '-' ? [1,0] : [0,1]

    const [dx,dy] = direction
    const [nx,ny] = [x + dx, y + dy]

    if(verify(nx,ny) && !visited[ny][nx] && data[ny][nx] === stick) {
      DFS(nx,ny,stick)
    }
  }

  let result = 0
  for(let i = 0 ; i < Y ; i ++) {
    for(let j = 0 ; j < X ; j ++) {
      if(!visited[i][j]) {
        DFS(j,i,data[i][j])
        result ++
      }
    } 
  }
  console.log(result)
}

solution(input)
