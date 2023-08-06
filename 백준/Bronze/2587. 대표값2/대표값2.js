const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const avg = data.reduce((acc,cur)=> acc+Number(cur),0)/data.length
  const sorted = data.sort((a,b)=> a-b)[2]

  console.log([avg,sorted].join("\n"))
}

solution(input)
 