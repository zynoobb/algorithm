const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [n,m] = data.split(' ').map(Number).sort((a,b)=> a-b)
  const k = (m - n + 1)/2
  const result = BigInt((m+n)*k)
  console.log(Number(result))
}

solution(input)

