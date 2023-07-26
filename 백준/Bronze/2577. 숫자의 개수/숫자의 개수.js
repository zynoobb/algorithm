const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const sum = data.reduce((acc,cur)=> {
    return acc * cur
  },1)
  
  let obj = {}

  const arr = [...String(sum)]
  arr.forEach((el)=> obj[el] = (obj[el]||0) + 1)
  
  for(let i = 0 ; i <= 9 ; i ++) {
    obj[i] ? console.log(obj[i]) : console.log(0)
  }
}

solution(input)