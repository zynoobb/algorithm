const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  data.forEach((el, idx)=> {
    const [a,b] = el.split(" ").map((el)=> Number(el))
    console.log(`Case #${idx + 1}: ${a} + ${b} = ${a+b}`)
  })
}

solution(input)