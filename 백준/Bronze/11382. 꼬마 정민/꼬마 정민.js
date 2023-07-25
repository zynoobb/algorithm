const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const result = data.split(" ")
  console.log(result.reduce((acc,cur)=> {
    return acc + Number(cur)
  },0))
}

solution(input)