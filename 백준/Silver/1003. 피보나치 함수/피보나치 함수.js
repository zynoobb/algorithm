const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()
  const dp = {}
  dp[0] = [1,0]
  dp[1] = [0,1]
  
  for(let i = 2 ; i <= 40 ; i ++) {
    const [a1,b1,a2,b2] = [...dp[i-2], ...dp[i-1]]
    dp[i] = [a1+a2, b1+b2]
  }
  
  const result = data.map(el => dp[el].join(' '))
  console.log(result.join('\n'))
}

solution(input)  
