const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


function solution(data) {
  data.forEach((el)=> {
    const [a,b] = el.split(" ").map((el)=> Number(el))
    console.log(a+b)
  })
}

solution(input)