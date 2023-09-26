const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [n,k] = data.split(' ').map(Number)
  
  const dp = [[1],[1,1]]
  
  for(let i = 2 ; i <= n ; i ++) {
    dp[i] = []
    for(let j = 0 ; j < i + 1 ; j ++) {
      if(j === 0 || j === i) dp[i][j] = 1
      else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
      }
    }
  }

  console.log(dp[n-1][k-1])
}

solution(input) 