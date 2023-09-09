const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()

  const square = Array.from({length : 32}, (_, idx)=> '1' + '0'.repeat(idx))

  const result = data.map(el => {
    const n2 = Number(el).toString(2)
    return square.includes(n2) ? 1 : 0
  })
  console.log(result.join('\n'))
}

solution(input)