const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  let table = {}

  data.forEach((el)=> {
    const [name, cost] = el.split(' ')
    if(!table[cost]) table[cost] = [name]
    else table[cost].push(name)
  })

  const sorted = Object.entries(table).sort((a,b)=> {
      if(a[1].length !== b[1].length) return a[1].length - b[1].length
      else return a[0] - b[0]
    })

  const result = [sorted[0][1][0], sorted[0][0]]
  console.log(result.join(' '))
}

solution(input)