const fs = require('fs')
// const input = fs.readFileSync('입력/11650.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()
const inputData = input.map((el)=> el.split(" "))

function solution (data) {
  const result = data.sort((a,b)=> {
    if(a[0] !== b[0]) return a[0] - b[0]
    else if(a[0] === b[0]) return a[1] - b[1]
  })

  console.log(result.map((el)=> el.join(" ")).join("\n"))
}

solution(inputData)