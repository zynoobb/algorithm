const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b,c,d] = data.split(" ")
  console.log(Number(a+b) + Number(c+d))
}
solution(input)
