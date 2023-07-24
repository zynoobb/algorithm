const fs = require('fs')
// const input = fs.readFileSync('입력/1008.txt').toString().trim().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

const [a,b] = input
function solution (a,b) {
  console.log(a/b)
}

solution(a,b)
