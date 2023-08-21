const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let result = 0
  while (data > 0) {
    const leng = String(data).length
    const del = data - (Math.pow(10,leng-1)) +1
    result += del * leng
    data -= del
  }
  console.log(result)
}

solution(input)
