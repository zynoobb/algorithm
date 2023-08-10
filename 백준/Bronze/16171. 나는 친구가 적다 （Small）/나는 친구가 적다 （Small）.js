const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  let str = data[0].split("").filter((el)=> isNaN(el)).join("")
  console.log(str.includes(data[1]) ? "1" : "0")
}

solution(input)
 