const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  let table = {}

  data.forEach((el)=> {
    table[el[0]] = (table[el[0]] || 0 ) + 1
  })

  const filtered = Object.entries(table).filter((el)=> el[1] >= 5)
  
  if(filtered.length === 0) console.log("PREDAJA")
  else if(filtered.length === 1) console.log(filtered[0][0])
  else {
    const sorted = filtered.sort((a,b)=> a[0].localeCompare(b[0])).map((el)=> el[0])
    console.log(sorted.join(""))
  }
}

solution(input)
