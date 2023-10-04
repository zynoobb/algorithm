const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (n,m,x,y) => {
  return n > y && y >= 0 && m > x && x >= 0
}

function solution(data) {
  const [[n,m], ...matrix] = data.map(el=> el.split(' ').map(Number))
  const dp = Array.from({length : n}, ()=> {
    return Array.from({length : m}, ()=> 0)
  })

  dp[0][0] = matrix[0][0]

  const directions = [[1,0],[0,1],[1,1]]

  for(let i = 0 ; i < n ; i ++) {
    for(let j = 0 ; j < m ; j ++) {
      directions.forEach((el)=> {
        const [dx,dy] = el
        const [nx,ny] = [dx+j,dy+i]
        if(verify(n,m,nx,ny)) {
          dp[ny][nx] = Math.max(dp[ny][nx], dp[i][j] + matrix[ny][nx])
        }
      })
    }
  }

  console.log(dp[n-1][m-1])
}

solution(input)  
