const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = (n) => {
  const coins = [25, 10, 5, 1]
  const result = []
  coins.forEach((coin)=> {
    result.push(Math.floor(n/coin))
    n = n%coin
  })
  return result
}

function solution(data) {
  const result = []
  data.forEach((el)=> result.push(act(el)))

  console.log(result.map(el=>el.join(" ")).join("\n"))
}

solution(input)
