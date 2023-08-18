const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const [[_,K], ...arr] = data.map(el=> el.split(" ").map(Number))

  const table = {}
  arr.forEach((el)=> table[el] = (table[el]||0) + 1)

  let result = 0
  for(let x in table) result += Math.ceil(table[x] / K)

  console.log(result)
}
solution(input)

