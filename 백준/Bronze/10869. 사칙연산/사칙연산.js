const fs = require('fs')
// const input = fs.readFileSync('입력/10998.txt').toString().trim().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")
const inputData = input.map((el)=> Number(el))

function solution (data) {
  const [a,b] = data
  let result = [a+b, a-b, a*b, Math.floor(a/b), a%b]
  console.log(result.join("\n"))
}

solution(inputData)