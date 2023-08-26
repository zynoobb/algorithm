const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N,L] = data.split(' ').map(Number)
  const result = []

  let idx = 1
  while (result.length < N) {
    if(!String(idx).includes(L)) {
      result.push(idx)
    }
    idx ++
  }

  console.log(result.at(-1))
}

solution(input)