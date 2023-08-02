const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

const reverse = (n) => [...String(n)].reverse().join("")

function solution(data) {
  const [a,b] = data.map(el=>+el)
  
  console.log(reverse(a) > reverse(b) ? reverse(a) : reverse(b))
}

solution(input)

