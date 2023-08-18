const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map(Number)

function solution(data) {
  const science = data.splice(0,4).sort((a,b)=> b-a)
  const social = data.sort((a,b)=> b-a)
  science.pop(),social.pop()

  const result = [...science, ...social].reduce((acc,cur)=> acc+cur)
  console.log(result)
}
  
solution(input)

