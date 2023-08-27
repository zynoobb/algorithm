const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [_,C] = input.shift().split(' ').map(Number)
function solution(data) {
  const resultTable = {}

  data.forEach((el)=> {
    for(let i = 0 ; i <= C ; i += +el) 
      resultTable[i] = true
  })
  console.log(Object.values(resultTable).length - 1)
}

solution(input)
