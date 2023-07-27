const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()
const findNum = input.pop()

function solution(data) {
  const arr = data[0].split(" ")
  console.log(arr.filter((el)=> el === findNum).length)
}

solution(input)
