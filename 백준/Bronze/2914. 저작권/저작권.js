const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ").map(Number)


function solution(data) {
  const [a,b] = data
  console.log(a*(b-1) + 1)
}
  
solution(input)
