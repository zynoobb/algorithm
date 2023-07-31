const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = []

  for(let i = 1 ; i <= data ; i ++) {
    const empty1 = " ".repeat(data - i)
    if(i === 1) {
      result.push(empty1 + "*")
    } else {
      const empty2 = " ".repeat(2*i - 3)
      result.push(empty1 + "*" + empty2 + "*")
    }
  }
  console.log(result.join("\n"))
}
solution(input)
