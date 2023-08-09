const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const all = data[0].split(" ").reduce((acc,cur)=> acc*Number(cur),1)
  const result = data[1].split(" ").map((el)=> el - all)
  console.log(result.join(" "))
}

solution(input)
 