const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  const result = data.map((el, idx)=> {
    const reversed = el.split(' ').reverse().join(' ')
    return `Case #${idx + 1}: ${reversed}`
  })

  console.log(result.join('\n'))
}

solution(input)

