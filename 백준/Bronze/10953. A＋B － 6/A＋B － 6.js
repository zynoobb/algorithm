const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    const [a,b] = el.split(",").map((x)=> +x)
    result.push(a+b)
  })
  console.log(result.join('\n'))
}

solution(input)
 