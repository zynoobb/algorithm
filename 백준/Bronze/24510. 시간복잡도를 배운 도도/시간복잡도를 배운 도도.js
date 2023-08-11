const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


input.shift()

function solution(data) {
  let result = 0

  data.forEach((el)=> {
    let temp = el.replaceAll("for", "#")
    const replace = temp.replaceAll("while", "#")
    const forable = replace.split("").filter((el)=> el === "#").length
    if(result < forable) result = forable
  })

  console.log(result)
}

solution(input)
 