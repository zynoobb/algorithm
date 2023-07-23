const fs = require('fs')
// const input = fs.readFileSync('입력/1157.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

const obj = {}

function solution(data) {
  if(data.length === 1) {
    console.log(data.toUpperCase())
    return
  }
  const arr = data.split("").map((el)=> el.toUpperCase())
  arr.forEach((el)=> {
    obj[el] = (obj[el] || 0) + 1
  })

  const sorted = Object.entries(obj).sort((a,b)=> b[1] - a[1])
  let result = sorted[0][1] === sorted[1][1] ? "?" : sorted[0][0]
  console.log(result)
}

solution(input)