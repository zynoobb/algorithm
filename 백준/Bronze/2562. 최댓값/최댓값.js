const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const max = Math.max(...data)
  const maxIdx = data.indexOf(String(max)) + 1
  console.log(max)
  console.log(maxIdx)
}

solution(input)