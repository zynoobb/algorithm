const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  let result = 0
  data.forEach((el)=> {
    [a,b] = el.split(" ").map(Number)
    result += b%a
  })
  console.log(result)
}

solution(input)

