const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let sum = Number(data[0].split(" ")[0]) * 60 + Number(data[0].split(" ")[1])
  const add = Number(data[1])
  const result = (sum + add)%1440

  console.log(`${Math.floor(result/60)} ${result%60}`)
}

solution(input)