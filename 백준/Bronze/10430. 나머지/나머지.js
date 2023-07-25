const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const [A,B,C] = data.split(" ").map((el)=> Number(el))

  console.log((A+B)%C)
  console.log(((A%C) + (B%C))%C)
  console.log((A*B)%C)
  console.log(((A%C) * (B%C))%C)
}

solution(input)