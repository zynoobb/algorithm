const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const act = (arr) => {
  const table = {}
  arr.forEach((el)=> table[el] = (table[el] || 0) + 1)
  
  const entries = Object.entries(table)

  if(entries.length === 1) return 50000 + entries[0][0] * 5000

  const sorted = entries.sort((a,b)=> b[1] - a[1])
  if(entries.length === 2) {
    if(sorted[0][1] === 3) return 10000 + sorted[0][0] * 1000
    else if(sorted[0][1] === 2) return 2000 + sorted[0][0] * 500 + sorted[1][0] * 500
  }
  else if (entries.length === 3) return 1000 + sorted[0][0] * 100
  else if (entries.length === 4) return Math.max(...sorted.map(el=>el[0])) * 100
}

function solution(data) {
  const testCase = data.map(el=> el.split(' ').map(Number))
  const result = testCase.map(el=> act(el))
  console.log(Math.max(...result))
}

solution(input)
