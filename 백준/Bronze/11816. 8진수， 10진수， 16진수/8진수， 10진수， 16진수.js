const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let result = ''
  if(data[1] === 'x') result = parseInt(data.slice(2), 16)
  else if(data[0] === '0') result
  
  console.log(
    data[1] === 'x' ? result = parseInt(data.slice(2), 16)
    : data[0] === '0' ? result = parseInt(data.slice(1), 8)
    : data
  )
}

solution(input)