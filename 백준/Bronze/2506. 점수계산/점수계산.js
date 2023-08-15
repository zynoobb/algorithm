const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const arr = data[0].split(' ').map(Number)
  let score = []
  arr.reduce((acc,cur)=> {
    if(cur === 1) {
      score.push(acc + cur)
      return acc + cur
    } else {
      score.push(cur)
      return 0
    }
  }, 0)

  console.log(score.reduce((acc,cur)=> acc + cur))
}
  
solution(input)
