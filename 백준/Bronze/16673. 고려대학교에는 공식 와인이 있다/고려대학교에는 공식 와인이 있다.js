const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [C,K,P] = data.split(' ').map(Number)

  let result = 0
  for(let i = 1 ; i <= C ; i ++) {
    result += i * (K + P * i)
  }

  console.log(result)
} 

solution(input)
