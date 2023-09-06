const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[a,b], [c,d]] = data.map(el=>el.split(' ').map(Number))
  console.log(Math.min(a+d, b+c))
}

solution(input)
