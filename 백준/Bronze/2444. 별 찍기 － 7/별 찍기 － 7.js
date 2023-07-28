const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let result = []

  for(let i = 0 ; i < 2*data - 1 ; i ++) {
    if(i < data) {
      const empty = " ".repeat(data - i - 1)
      const star = "*".repeat(2*i + 1)
      result.push(empty + star)
    } else {
      const empty = " ".repeat(i - data + 1)
      const star = "*".repeat(4*data - 2*i - 3)
      result.push(empty + star)
    }
  }
  
  console.log(result.join("\n"))
}

solution(input)
