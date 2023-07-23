const fs = require('fs')
// const input = fs.readFileSync('입력/1001.txt').toString().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().split(" ")

function solution (a,b) {
  console.log(a-b)
}

solution(input[0], input[1])
