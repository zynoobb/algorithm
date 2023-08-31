const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  const [a,b] = data.map(el=> {
    return el.split(' ')
      .map(Number)
      .reduce((ac,cur)=> ac + cur)
  })
  console.log(a-b)
}

solution(input)