const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b] = data.split(':')
  
  let x = a > b ? a : b
  let y = a > b ? b : a

  while(y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }

  console.log([a,b].map(el=> el/x).join(':'))
}

solution(input)