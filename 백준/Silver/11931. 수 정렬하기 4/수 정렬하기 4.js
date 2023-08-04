const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const result = data.sort((a,b)=> b-a)
  console.log(result.join('\n'))
}

solution(input)
 