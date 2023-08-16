const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = arr => {
  const oneLocation = []
  arr.forEach((el,idx)=> {
    if(el === "1") oneLocation.push(idx)
  })
  return oneLocation.join(" ")
}
function solution(data) {
  const result = []

  data.forEach((el)=> {
    const to2 = Number(el).toString(2).split("").reverse()
    result.push(act(to2))
  })

  console.log(result.join('\n'))
}
  
solution(input)