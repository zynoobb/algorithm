const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    result.push(String(el**2).split(el).at(-1) === "" ? "YES" : "NO")
  })
  console.log(result.join('\n'))
}
solution(input)
