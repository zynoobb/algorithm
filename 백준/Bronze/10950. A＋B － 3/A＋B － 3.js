const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  data.forEach((el)=> {
    const [x,y] = el.split(" ").map((el)=> Number(el))
    console.log(x + y)
  })
}

solution(input)