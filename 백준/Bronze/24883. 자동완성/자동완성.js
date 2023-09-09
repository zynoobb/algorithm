const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  console.log(data.toLowerCase() === 'n' ? 'Naver D2' : 'Naver Whale')
}

solution(input)