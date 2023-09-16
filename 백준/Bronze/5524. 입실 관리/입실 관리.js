const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

  function solution(data) {
    data.shift()

    const result = data.map(el => el.toLowerCase())
    console.log(result.join('\n'))
  }

  solution(input)