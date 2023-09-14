const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  const makingX = (n) => {
    const str = '@'.repeat(5 * n)
    const arr = Array.from({length : n}, ()=> str)
    return arr
  }

  const makingY = (n) => {
    const str = '@'.repeat(n)
    const arr = Array.from({length : n * 3}, ()=> str)
    return arr
  }

  function solution(data) {
    const result = [...makingX(data), ...makingY(data), ...makingX(data)]
    console.log(result.join('\n'))
  }

  solution(input)