const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const cards = data[1].split(" ").map(Number)
  const questions = data[3].split(" ").map(Number)

  let table = {}
  cards.forEach((el)=> table[el] = true)
  
  let result = []
  questions.forEach((el)=> {
    result.push(table[el] ? "1" : "0")
  })

  console.log(result.join(' '))
}

solution(input)
 