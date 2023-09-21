const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const result = []

  data.forEach((el,idx)=> {
    el.includes('FBI') && result.push(idx + 1)
  })

  console.log(
    result.length !== 0 
    ? result.join(' ') 
    : 'HE GOT AWAY!')
}

solution(input)
