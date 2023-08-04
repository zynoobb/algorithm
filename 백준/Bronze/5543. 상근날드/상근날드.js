const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const [a,b,c, ...rest] = data
  const burger = Math.min(a,b,c)
  const soda = Math.min(...rest)

  console.log(burger + soda - 50)
}

solution(input)
 