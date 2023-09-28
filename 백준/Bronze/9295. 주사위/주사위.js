const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()
  const result = data.map((el, idx) => {
    const [a,b] = el.split(' ').map(Number)
    return `Case ${idx + 1}: ${a + b}`
  })

  console.log(result.join('\n'))
}

solution(input) 