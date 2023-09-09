const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.pop()

  const result = data.reduce((acc,cur)=> acc + + cur, 0)
  console.log(result)
}

solution(input)