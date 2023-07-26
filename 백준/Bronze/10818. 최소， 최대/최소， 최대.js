const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const arr = data.join(" ").split(" ")
  console.log(`${Math.min(...arr)} ${Math.max(...arr)}`)
}

solution(input)