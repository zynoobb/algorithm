const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const temp = data.join("")
  const letter = [...temp].filter((el)=> el !== " ")
  let table = {}

  letter.forEach((el)=> {
    table[el] = (table[el] || 0) + 1
  })

  const sorted = Object.entries(table).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    if(a[1] === b[1]) return a[0].localeCompare(b[0])
  })

  let max = sorted[0][1]
  const result = sorted.filter((a)=> a[1] === max)
    .map((b)=> b[0]).join("")

  console.log(result)
}
solution(input)
