const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b,c] = data.split(' ')
  const [case1,case2] = [a / b * c, a * b / c]
  const result = Math.floor(Math.max(case1, case2))
  console.log(result)
}

solution(input)
