const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = ""
  for(let i = 1 ; i <= data ; i ++) result += i + '\n'
  console.log(result)
}

solution(input)