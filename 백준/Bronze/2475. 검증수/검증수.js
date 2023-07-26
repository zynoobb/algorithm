const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

function solution(data) {
  const result = data.reduce((acc,cur)=> {
    return acc + Math.pow(cur, 2)
  }, 0)
  console.log(result%10)
}

solution(input)