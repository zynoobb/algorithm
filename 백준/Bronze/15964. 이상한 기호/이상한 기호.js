const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

function solution(data) {
  const [a,b] = data.map((el)=>Number(el))
  console.log((a+b)*(a-b))
}
solution(input)
