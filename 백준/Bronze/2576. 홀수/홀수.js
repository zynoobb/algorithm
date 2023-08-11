const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


function solution(data) {
  const filtered = data.filter((el)=> el%2===1)

  if(filtered.length === 0) {
    console.log("-1")
    return
  }
  
  const sum = filtered.reduce((a,c)=> a+ +c,0)
  const min = Math.min(...filtered)
  console.log([sum,min].join('\n'))
}

solution(input)
 