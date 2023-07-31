const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = []

  for(let i = 1 ; i <= data * 2 - 1 ; i ++) {
    if(i <= data) {
      const empty = " ".repeat(data - i)
      const star = "*".repeat(i)
      result.push(empty + star)
    } else {
      const empty = " ".repeat(i - data)
      const star = "*".repeat(2*data - i)
      result.push(empty + star)
    }
  }
  console.log(result.join("\n"))
}
solution(input)
