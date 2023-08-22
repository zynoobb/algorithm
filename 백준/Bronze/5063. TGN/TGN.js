const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = (r,e,c) => {
  const dif = (e-c) - r
  return dif > 0 ? "advertise" : dif === 0 ? "does not matter" : "do not advertise"
}

function solution(data) {
  const result = []

  data.forEach((el)=> {
    const [r,e,c] = el.split(" ").map(Number)
    result.push(act(r,e,c))
  })

  console.log(result.join('\n'))
}

solution(input)
