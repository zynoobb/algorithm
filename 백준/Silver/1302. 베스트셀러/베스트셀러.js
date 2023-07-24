const fs = require('fs')
// const input = fs.readFileSync('입력/1302.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  if(data[0] === "1") {
    console.log(data[1])
    return
  } else data.shift()

  let obj = {}

  data.forEach((el)=> {
    obj[el] = (obj[el] || 0) + 1
  })

  const sorted = Object.entries(obj).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    else return a[0].localeCompare(b[0])
  })

  console.log(sorted[0][0])
}

solution(input)
