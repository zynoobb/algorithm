const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [_, k] = input.shift().split(" ")

function solution(data) {
  const sorted = data[0].split(" ").sort((a,b)=> b-a)
  console.log(sorted[k-1])
}

solution(input)
 