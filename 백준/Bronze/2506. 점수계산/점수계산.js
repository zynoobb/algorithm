const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const arr = data[0].split(' ').map(Number)
  let result = 0
  arr.reduce((acc,cur)=> {
    if(cur === 1) {
      result += acc + cur
      return acc + cur
    } else return 0
  }, 0)

  console.log(result)
}
  
solution(input)
