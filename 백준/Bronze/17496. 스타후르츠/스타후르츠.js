const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [n,t,c,p] = data.split(' ').map(Number)
  const d = Math.floor((n-1) / t)
  console.log(d * c * p)
}

solution(input)
