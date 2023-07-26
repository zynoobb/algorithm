const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  const arr = data[0].split("")
  const result = arr.reduce((acc,cur)=> acc + Number(cur), 0)
  console.log(result)
}

solution(input)