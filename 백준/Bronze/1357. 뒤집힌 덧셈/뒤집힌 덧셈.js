const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")


const act = (str) => {
  const reverse = str.split("").reverse().join("")
  return Number(reverse)
}

function solution(data) {
  const [a,b] = data
  const A = act(a)
  const B = act(b)

  console.log(act(String(A+B)))
}

solution(input)
 