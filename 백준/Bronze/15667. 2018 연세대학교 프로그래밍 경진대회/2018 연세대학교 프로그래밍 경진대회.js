const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  function solution(data) {
    console.log(Math.floor(Math.sqrt(data)))
  }

  solution(input)