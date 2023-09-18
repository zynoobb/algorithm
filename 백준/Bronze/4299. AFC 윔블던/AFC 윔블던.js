const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [p,m] = data.split(' ').map(Number)
  const a = (p + m)/2
  const b = p - a
  
  const verify = () => {
    return Math.floor(a) === a && Math.floor(b) === b && p >= m
  }

  console.log(verify() ? [a,b].join(' ') : -1)
}

solution(input)
