const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  const max = Math.max(...data)
  const dp = Array.from({length : max},()=> 0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  
  for(let i = 4 ; i <= max ; i ++) {
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-3])%1000000009
  }

  const result = data.map((el)=> dp[el])
  console.log(result.join('\n'))
}

solution(input)