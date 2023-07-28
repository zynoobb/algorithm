const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


function solution(data) {
  console.log(parseInt(data[0],16))
}

solution(input)

