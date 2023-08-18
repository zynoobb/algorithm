const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const arr = data.map((el)=> el.split(" ")).sort((a,b)=> {
    if(a[1] === b[1]) return a[0] - b[0]
    else if(a[1] !== b[1]) return a[1] - b[1]
  })
  
  const result = arr.map((el)=> el[2]).join("")
  console.log(result)
}
  
solution(input)

