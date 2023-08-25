const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = data.split('-').map(el=>el[0]).join('')
  console.log(result)
}

solution(input)