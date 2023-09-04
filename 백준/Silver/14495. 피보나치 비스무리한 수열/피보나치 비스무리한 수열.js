const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const dp = [0,1,1,1]

  for(let i = 4 ; i <= data ; i ++) {
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-3])
  }

  console.log(String(dp[data]))
} 

solution(input)