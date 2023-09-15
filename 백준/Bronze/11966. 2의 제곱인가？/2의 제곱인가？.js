const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  function solution(data) {
    const str = Number(data).toString(2)
    const compare = '1' + '0'.repeat(str.length - 1)

    console.log(str === compare ? 1 : 0)
  }

  solution(input)