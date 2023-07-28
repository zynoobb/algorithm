const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let result = []

  for(let i = 0 ; i < data ; i ++) {
    result.push(" ".repeat(i) + "*".repeat(data - i))
  }

  console.log(result.join("\n"))
}

solution(input)