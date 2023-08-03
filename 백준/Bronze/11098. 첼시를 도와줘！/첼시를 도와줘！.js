const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  let cases = []
  let temp = []

  data.push(data.shift())
  data.forEach((el)=> {
    if(!isNaN(el)) {
      cases.push(temp)
      temp = []
    } else {
      const [price, name] = el.split(" ")
      temp.push([price, name])
    }
  })

  let result = []
  cases.forEach((el)=> {
    const sorted = el.sort((a,b)=> b[0] - a[0])
    result.push(sorted[0][1])
  })

  console.log(result.join('\n'))
}

solution(input)
 