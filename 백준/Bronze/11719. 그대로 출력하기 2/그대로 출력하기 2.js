const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().split('\n')

function solution(data) {
  console.log(data.join('\n'))
}

solution(input)
