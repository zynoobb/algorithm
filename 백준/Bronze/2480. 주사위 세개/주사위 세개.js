const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let obj = {}
  const arr = data.split(" ")
  arr.forEach((el)=> obj[el] = (obj[el] || 0) + 1)
  const result = Object.entries(obj)
  
  if(result.length === 1) console.log(10000 + 1000 * (result[0][0]))
  else if (result.length === 2) {
    const sorted = result.sort((a,b)=> b[1] - a[1])
    console.log(1000 + sorted[0][0] * 100)
  } else {
    const sorted = result.sort((a,b)=> b[0] - a[0])
    console.log(sorted[0][0] * 100)
  }

}

solution(input)