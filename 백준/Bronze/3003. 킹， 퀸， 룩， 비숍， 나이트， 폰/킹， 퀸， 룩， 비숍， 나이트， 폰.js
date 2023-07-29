const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const arr = data[0].split(" ")
  const table = {
    0 : "1",
    1 : "1",
    2 : "2",
    3 : "2",
    4 : "2",
    5 : "8"
  }
  let result = []
  arr.forEach((el,idx)=> result.push(table[idx] - el))
  console.log(result.join(" "))
}
solution(input)
