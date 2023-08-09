const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const arr = data.map(el=> +el)
  const [a,b,c] = arr

  if(arr.reduce((acc,cur)=> acc+cur,0) !== 180) console.log("Error")
  else if(a === b && b === c && a === c) console.log("Equilateral")
  else if(a !== b && b !== c && a !== c) console.log("Scalene")
  else console.log("Isosceles")
}

solution(input)
 