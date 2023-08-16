const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const result = []
  const table = {}
  data.forEach((el)=> table[el] = true)

  for(let i = 1 ; i <= 30 ; i++) {
    if(!table[i]) result.push(i)
  }
  console.log(result.join("\n"))
}
  
solution(input)
