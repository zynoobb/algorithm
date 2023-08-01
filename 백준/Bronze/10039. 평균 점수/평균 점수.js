const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map(el=>+el)

function solution(data) {
  let result = 0
  data.forEach((el)=> {
    el < 40 ? result += 40 : result += el
  })

  console.log(result/data.length)
}
solution(input)
