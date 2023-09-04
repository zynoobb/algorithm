const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let sum = 0
  let count = 1
  while (sum <= data) {
    sum += count ++
  }

  console.log(count-2)
} 

solution(input)