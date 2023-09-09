const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N], arr] = data.map(el=>el.split(' ').map(Number))
  const dp = [arr[0]]
  let max = arr[0]
  
  for(let i = 1 ; i < N ; i ++) {
    dp[i] = Math.max(arr[i] + dp[i-1], arr[i])
    max = dp[i] > max ? dp[i] : max
  }
  console.log(max)
}

solution(input)