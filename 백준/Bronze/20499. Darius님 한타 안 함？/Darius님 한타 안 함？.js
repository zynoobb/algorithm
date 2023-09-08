const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [k,d,a] = data.split('/').map(Number)

  console.log(d === 0 || k + a < d ? 'hasu' : 'gosu')
}

solution(input)