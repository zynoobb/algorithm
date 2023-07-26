const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let set = new Set()

  data.forEach((el)=> set.add(el%42))

  console.log(set.size)
}

solution(input)