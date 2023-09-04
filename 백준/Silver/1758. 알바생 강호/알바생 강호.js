const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_, ...temp] = data.map(Number)
  const sorted = temp.sort((a,b)=> b-a)
  let result = 0
  sorted.forEach((el, idx)=> {
    result += el - idx > 0 ? el - idx : 0
  })
  console.log(result)
}

solution(input)