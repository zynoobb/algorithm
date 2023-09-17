const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b] = data.split(' ').map(Number)
  console.log(Math.abs(a-b))
}

solution(input)
