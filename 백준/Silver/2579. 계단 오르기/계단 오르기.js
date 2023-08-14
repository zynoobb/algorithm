const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const [N, ...arr] = data.map(Number)
  const DP = Array.from({length : N+1}, ()=> 0)
  arr.unshift(0)
  DP[1] = arr[1]
  DP[2] = arr[1] + arr[2]
  DP[3] = Math.max(arr[1], arr[2]) + arr[3]

  for(let i = 4 ; i <= N ; i ++) {
    DP[i] = Math.max(
      DP[i-3] + arr[i-1] + arr[i],
      DP[i-2] + arr[i]
    )
  }
  
  console.log(DP[N])
}

solution(input)