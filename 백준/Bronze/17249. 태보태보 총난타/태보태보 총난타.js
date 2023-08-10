const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

const act = (str) => {
  return str.split("").filter((el)=> el === "@").length
}

function solution(data) {
  const arr = data.split("(^0^)")
  let result = []
  arr.forEach((el)=> {
    result.push(act(el))
  })

  console.log(result.join(" "))
}

solution(input)
 