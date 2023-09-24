const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const dp = [0,1,1]
  
  for(let i = 3 ; i <= +data ; i++)
    dp[i] = dp[i-1] + dp[i-2]
  

  console.log(dp[data])
}

solution(input)
