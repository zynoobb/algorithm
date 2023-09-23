const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const sorted = data.split(' ').sort((a,b)=>a-b)
  console.log(sorted[0] * sorted[2])
}

solution(input)
