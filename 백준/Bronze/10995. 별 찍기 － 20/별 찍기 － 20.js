const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const case1 = "* ".repeat(data).trim()
  const case2 = " *".repeat(data)
  const result = Array.from({length : data}, (_, idx)=> {
    return idx % 2 === 0 ? case1 : case2
  })
  console.log(result.join("\n"))
}
solution(input)
