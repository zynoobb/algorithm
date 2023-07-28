const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let num = data[0]

  let result = 0
  while (true) {
    if(num.length === 1) break
    num = [...num]
    num = String(num.reduce((acc,cur)=> acc + Number(cur), 0))
    result ++
  }

  console.log([result, num%3 === 0 ? "YES" : "NO"].join("\n"))
}

solution(input)
