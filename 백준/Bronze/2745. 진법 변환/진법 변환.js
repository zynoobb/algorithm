const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [str, n] = data 
  console.log(parseInt(str,n))
}

solution(input)
 