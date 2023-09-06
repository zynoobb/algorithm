const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const table = {}
  data.split('').forEach((el)=> {
    el === '6' || el === '9' 
    ? table['6'] = (table['6'] || 0) + 0.5
    : table[el] = (table[el] || 0) + 1
  })

  const max = Math.max(...Object.values(table))

  console.log(Math.ceil(max))
}

solution(input)
