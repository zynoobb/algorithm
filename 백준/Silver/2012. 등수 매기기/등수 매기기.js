const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const sorted = data.map(Number).sort((a,b)=> a-b)
  
  let result = 0
  sorted.forEach((el,idx)=> {
    result += Math.abs((idx+1)-el)
  })
  console.log(result)
}

solution(input)
