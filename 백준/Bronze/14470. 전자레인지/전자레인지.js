const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let [a, b, c, d, e] = data.map((el)=> Number(el))
  console.log(a < 0 ? (-a) * c + d + b * e : (b - a) * e)
}
solution(input)
