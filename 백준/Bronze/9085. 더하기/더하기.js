const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const result = []
  data.forEach((el,idx)=> {
    if(idx % 2 === 1) {
      const arr = el.split(" ").map(Number)
      result.push(arr.reduce((acc,cur)=> acc + cur))
    }
  })
  console.log(result.join('\n'))
}

solution(input)
