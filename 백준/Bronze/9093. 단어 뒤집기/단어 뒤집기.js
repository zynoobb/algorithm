const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((arr)=> {
    let tempArr = arr.split(" ")
    let temp = []
    tempArr.forEach((el)=> {
      const reverse = el.split("").reverse().join("")
      temp.push(reverse)
    })
    result.push(temp.join(" "))
  })
  console.log(result.join('\n'))
}

solution(input)
 