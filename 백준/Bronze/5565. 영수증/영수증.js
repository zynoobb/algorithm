const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map(Number)


function solution(data) {
  const [sum, ...arr] = data
  console.log(sum - arr.reduce((a,c)=>a+c,0))
}
  
solution(input)
