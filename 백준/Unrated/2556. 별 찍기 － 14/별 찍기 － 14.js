const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = []

  for(let i = 1 ; i <= data ; i ++) {
    const star = "*".repeat(data)
    result.push(star)
  }
  console.log(result.join("\n"))
}
solution(input)
