const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const table = {}
  data.forEach((str, idx)=> {
    str.split('').forEach((el)=> {
      if(idx === 0) table[el] = (table[el] || 0) + 1
      else table[el] = (table[el] || 0) - 1
    })
  })
  
  let result = 0
  for(let el in table) {
    result += Math.abs(table[el])
  }
  
  console.log(result)
}

solution(input)