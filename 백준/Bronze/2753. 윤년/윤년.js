const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  if(data%4 !== 0) console.log(0)
  else if(data%400 === 0) console.log(1)
  else if(data%100 === 0) console.log(0)
  else if(data%4 === 0) console.log(1)
}

solution(input)