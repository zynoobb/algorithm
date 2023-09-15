const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  function solution(data) {
    const pi = Math.PI
    const pow = Math.pow(+data, 2)

    const result = [pow * pi, pow * 2].map(el => el.toFixed(6))
    console.log(result.join('\n'))
  }

  solution(input)