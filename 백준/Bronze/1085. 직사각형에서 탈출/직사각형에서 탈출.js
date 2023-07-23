const fs = require('fs')
// const input = fs.readFileSync('입력/1085.txt').toString().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().split(" ")

function solution(input) {
  const [x,y,w,h] = input
  const result = [x,y, w-x, h-y]

  console.log(Math.min(...result))
}

solution(input)