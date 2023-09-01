const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [K, N, M] = data.split(' ').map(Number)
  console.log(K * N > M ? K * N - M : 0)
}

solution(input)