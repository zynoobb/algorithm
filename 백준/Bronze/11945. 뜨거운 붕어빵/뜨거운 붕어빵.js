const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const result = data.slice(1)
    .map(el => el.split('').reverse().join(''))

  console.log(result.join('\n'))
}

solution(input)