const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.pop()
function solution(data) {
  const result = []
  data.forEach((el)=> {
    const [b,c] = el.split(" ").map(Number)
    const a = 2*b - c
    result.push(a)
  })
  console.log(result.join('\n'))
}

solution(input)

