const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const leng = input.shift()

function solution(data) {
  const sorted = data[0].split(" ").sort((a,b)=> a-b)
  console.log(sorted[0] * sorted.at(-1))
}

leng === "1" ? console.log(input[0]**2) : solution(input)

