const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const arr = data.split(" ").filter((el)=> el !== "")
  console.log(arr.length)
}

solution(input)