const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const coins = [500, 100, 50, 10, 5, 1]
  let result = 0
  let money = 1000 - data
  
  coins.forEach((coin)=> {
    result += Math.floor(money/coin)
    money = money%coin
  })
  console.log(result)
}

solution(input)
