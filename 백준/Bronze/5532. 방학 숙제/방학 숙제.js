const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [l,a,b,c,d] = data.map(Number)

  const result = Math.ceil(a/c) > Math.ceil(b/d) ? Math.ceil(a/c) : Math.ceil(b/d)
  console.log(l - result)
}

solution(input)
