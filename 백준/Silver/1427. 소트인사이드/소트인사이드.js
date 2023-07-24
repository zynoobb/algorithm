const fs = require('fs')
// const input = fs.readFileSync('입력/1427.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution (data) {
  let result = [...data].sort((a,b)=> b-a).join("")
  console.log(result)
}

solution(input)