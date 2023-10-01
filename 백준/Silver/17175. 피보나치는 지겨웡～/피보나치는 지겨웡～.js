const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const dp = [1,1,3,5,9,15]
  
  for(let i = 6 ; i <= data ; i ++) 
    dp[i] = (dp[i-1] + dp[i-2] + 1) % 1000000007
  
  console.log(dp[data])
}

solution(input)  
