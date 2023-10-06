const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const dp = {}
  dp[0] = BigInt(1)

  for(let i = 1 ; i <= 35 ; i ++) {
    let temp = BigInt(0)
    for(let j = 0 ; j < i ; j ++) {
      temp += BigInt(dp[j]) * BigInt(dp[i-j-1])
    }
    dp[i] = temp
  }
  
  console.log(String(dp[data]))
}

solution(input)  
