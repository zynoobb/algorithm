const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.pop()

function solution(data) {
  let result = []

  data.forEach((str)=> {
    let temp = str.length + 1 
    str.split("").forEach((el)=> {
      if(el === "0") temp += 4
      else if(el === "1") temp += 2
      else temp += 3
    })
    result.push(temp)
  })
  console.log(result.join("\n"))
}
solution(input)
