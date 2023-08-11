const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    if(el.includes("Simon says")) {
      const said = el.split("Simon says").at(-1)
      result.push(said)
    }
  })

  console.log(result.join('\n'))
}

solution(input)
 