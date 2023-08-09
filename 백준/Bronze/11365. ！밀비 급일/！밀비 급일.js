const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.pop()
function solution(data) {
  let result = []

  data.forEach((el)=> {
    const reverse = el.split("").reverse().join("")
    result.push(reverse)
  })

  console.log(result.join("\n"))
}

solution(input)
 