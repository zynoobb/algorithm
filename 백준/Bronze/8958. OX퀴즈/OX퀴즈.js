const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const filtered = data.map((el)=> el.split("X"))
    .map((scores)=> scores.filter((score)=> score !== ""))

  filtered.forEach((arr)=> {
    let sum = 0
    arr.forEach((score)=> {
      sum += score.length * (score.length + 1) / 2
    })
    console.log(sum)
  })
}

solution(input)