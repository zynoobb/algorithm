const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const date = data.map(el => el.padStart(2,"0")).join("")
  const compare = "0218"

  console.log(compare > date ? "Before" : compare === date ? "Special" : "After")
}
  
solution(input)

