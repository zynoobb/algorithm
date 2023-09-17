const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [shield, cut] = data.split(' ').map(Number)
  const guard = shield * (100 - cut) / 100
  console.log(guard >= 100 ? 0 : 1)
}

solution(input)
