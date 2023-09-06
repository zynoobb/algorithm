const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b] = data.split(' ')
  console.log(a === b ? 1 : 0)
}

solution(input)
