const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const sum = data.reduce((acc,cur)=> acc+ +cur, 0)
  const result = [Math.floor(sum/60), sum%60]
  console.log(result.join("\n"))
}

solution(input)
 