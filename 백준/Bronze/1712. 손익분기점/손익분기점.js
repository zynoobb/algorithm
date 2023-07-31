const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split(' ')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

function solution(data) {
  const [a,b,c] = data.map((el)=> Number(el))
  const result = Math.floor(a/(c-b)) + 1
  console.log(b >= c ? -1 : result)
}
solution(input)
