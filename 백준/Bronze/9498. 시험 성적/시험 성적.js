const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  if(data >= 90) console.log("A")
  else if(data >= 80) console.log("B")
  else if(data >= 70) console.log("C")
  else if(data >= 60) console.log("D")
  else console.log("F")
}

solution(input)