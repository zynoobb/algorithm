const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const arr = data[0].split(" ").map(Number)
  const set = new Set(arr)
  const result = [...set].sort((a,b)=> a-b)
  console.log(result.join(" "))
}
  
solution(input)