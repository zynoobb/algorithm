const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ").map(el=>+el)

function solution(data) {
  const [r1, s] = data
  console.log(2*s-r1)
}
solution(input)
