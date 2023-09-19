const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const N = +data.shift()
  const dp = Array.from({length : N}, ()=> 0)
  
  data.forEach((el, idx)=> {
    const [days,price] = el.split(' ').map(Number)
  
    if(N >= idx + days) {
      dp[idx] += price

      for(let j = idx + days ; j < N ; j ++) 
        dp[j] = Math.max(dp[j], dp[idx])
    }
  })

  console.log(Math.max(...dp))
}

solution(input)
