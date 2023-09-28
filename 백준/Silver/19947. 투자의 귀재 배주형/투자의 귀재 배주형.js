const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [h, y] = data.split(' ').map(Number)
  
  const dp = Array.from({length : y + 1}, ()=> 0)
  dp[0] = h
  
  for(let i = 1 ; i <= y ; i ++) {
    dp[i] = ~~(dp[i - 1] * 1.05)

    if(i >= 3) dp[i] = ~~Math.max(dp[i], dp[i-3] * 1.2)
    if(i >= 5) dp[i] = ~~Math.max(dp[i], dp[i-5] * 1.35)
  }

  console.log(dp[y])
}

solution(input) 