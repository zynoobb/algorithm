const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = []

  for(let i = 1 ; i <= data ; i ++) {
    const empty = " ".repeat(data - i)
    const star = Array.from({length : 2*i - 1}).map((el,idx)=> {
      return idx % 2 === 0 ? el = "*" : el = " "
    }).join("").trim()
    result.push(empty + star)
  }
  console.log(result.join("\n"))
}
solution(input)
