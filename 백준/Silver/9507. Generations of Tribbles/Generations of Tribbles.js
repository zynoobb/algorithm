const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  const dp = Array.from({length : 68}, ()=> 0)
  dp[0] = 1, dp[1] = 1, dp[2] = 2, dp[3] = 4

  for(let i = 4 ; i <= 67 ; i ++) {
    const temp = [dp[i-1], dp[i-2], dp[i-3], dp[i-4]]
    dp[i] = temp.reduce((acc,cur)=> BigInt(acc) + BigInt(cur),0)
  }

  const result = data.map(el => String(dp[el]))
  console.log(result.join('\n'))
}

solution(input)