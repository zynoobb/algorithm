const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const target = "nemo"
  const arr = data.map((el)=> el.toLowerCase())
  arr.pop()

  let result = []
  arr.forEach((el)=> {
    result.push(el.includes(target) ? "Found" : "Missing")
  })
  console.log(result.join("\n"))
}

solution(input)
 