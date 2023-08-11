const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


function solution(data) {
  const [a,b,c,d,p] = data.map(Number)
  const xPrice = a * p
  const yPrice = p > c ? b + d * (p - c) : b

  console.log(xPrice > yPrice ? yPrice : xPrice)
}

solution(input)
 