const fs = require('fs')
// const input = fs.readFileSync('입력/11047.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let target = input.shift().split(" ")[1]

function solution (data) {
  const coins = data.reverse()
  let result = 0

  let idx = 0
  while (target !== 0) {
    const coin = coins[idx]
    result += Math.floor(target/coin)
    target = target%coin
    idx ++
  }
  console.log(result)
}

solution(input)