const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = []

  for(let i = 0 ; i < data ; i ++) {
    result.push(`Hello World, Judge ${i + 1}!`)
  }

  console.log(result.join('\n'))
}

solution(input)
