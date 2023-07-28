const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const table = {
    0 : "N",
    1 : "E",
    2 : "S",
    3 : "W"
  }

  const sum = data.map((el)=> Number(el)).reduce((acc,cur)=> acc + cur, 0)
  
  console.log(table[sum%4])
}

solution(input)
