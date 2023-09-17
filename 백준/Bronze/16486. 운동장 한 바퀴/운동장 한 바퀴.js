const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [a,b] = data.map(Number)
  const result = ((a + b * 3.141592) * 2).toFixed(6)
  console.log(result) 
}

solution(input)
