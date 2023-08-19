const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  const [a,b] = data.map(el=>el.split(' ').map(Number))
  const result = [...a, ...b].sort((x,y)=> x-y).join(" ")
  console.log(result)
}
solution(input)
