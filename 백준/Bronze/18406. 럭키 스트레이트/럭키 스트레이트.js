const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let result = 0
  const arr = data.split('').map(Number)
  
  arr.forEach((el, idx)=> {
    if(idx < arr.length / 2) result += el
    else result -= el
  })

  console.log(!result ? "LUCKY" : "READY")
}

solution(input)