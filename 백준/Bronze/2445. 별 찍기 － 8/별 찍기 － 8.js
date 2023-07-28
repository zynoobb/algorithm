const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let result = []

  for(let i = 1 ; i <= 2*data - 1 ; i ++) {
    if(i <= data) {
      const empty = " ".repeat(2*(data - i))
      const star = "*".repeat(i)
      result.push(star + empty + star)
    } else {
      const empty = " ".repeat(2*(i - data))
      const star = "*".repeat(2*data - i)
      result.push(star + empty + star)
    }
  }
  console.log(result.join("\n"))
}

solution(input)
