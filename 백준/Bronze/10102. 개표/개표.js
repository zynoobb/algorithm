const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  let result = 0
  data[0].split('').forEach(el=> {
    result += el === "A" ? 1 : -1
  })

  console.log(result > 0 ? "A" : 0 > result ? 'B' : 'Tie')
}

solution(input)

