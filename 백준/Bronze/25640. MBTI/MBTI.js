const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [def, _, ...arr] = data
  console.log(arr.filter(el => el === def).length)
}

solution(input) 