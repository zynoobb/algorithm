const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const table = {
    "SONGDO" : "HIGHSCHOOL",
    "CODE" : "MASTER",
    "2023" : "0611",
    "ALGORITHM" : "CONTEST"
  }

  console.log(table[data])
}

solution(input)
