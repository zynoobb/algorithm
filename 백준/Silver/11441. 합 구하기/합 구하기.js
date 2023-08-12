const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const [arr, _, ...quiz] = data.map((el)=> el.split(' ').map(Number))
  let table = {}
  
  table[0] = 0
  arr.reduce((acc,cur,idx)=> {
    const sum = acc + cur
    table[idx + 1] = sum
    return sum
  }, 0)

  let result = []
  quiz.forEach((el)=> {
    const [n,m] = el
    result.push(table[m]-table[n-1])
  })

  console.log(result.join("\n"))
}

solution(input)
