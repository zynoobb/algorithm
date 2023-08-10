const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const act = (n) => {
  let table = {}
  n.split("").forEach((el)=> {
    table[el] = true
  })
  return Object.values(table).length
}

function solution(data) {
  let result = []
  data.forEach((el)=> {
    result.push(act(el))
  })
  console.log(result.join('\n'))
}

solution(input)
 