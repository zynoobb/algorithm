const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let result = []

  for(let i = data ; i > 0 ; i--)
    result.push("*".repeat(i))

  console.log(result.join("\n"))
}
solution(input)
