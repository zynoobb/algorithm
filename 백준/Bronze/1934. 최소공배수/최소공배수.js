const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = (a,b) => {
  let x = a
  let y = b
  while (y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }
  return a*b/x
}

function solution(data) {
  const result = data.map((el)=> {
    const [a,b] = el.split(" ").map(n=> +n)
    return act(a,b)
  })
  
  console.log(result.join("\n"))
}
solution(input)
