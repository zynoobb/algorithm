const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = data.split(',').reduce((ac,cur)=> ac + Number(cur),0)
  console.log(result)
}

solution(input)
