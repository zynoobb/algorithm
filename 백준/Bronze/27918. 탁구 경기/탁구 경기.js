const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const leng = Number(input.shift())

function solution(data) {
  let score = [0,0]

  let i = 0
  while(i !== leng) {
    if(Math.abs(score[0] - score[1]) === 2) break
    data[i] === "D" ? score[0] ++ : score[1] ++
    i++
  }

  console.log(score.join(":"))
}
solution(input)
