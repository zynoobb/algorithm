const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const result = data[0].split(" ").sort((a,b)=> Number(a)-Number(b))
  console.log(result.join(' '))
}

solution(input)
 