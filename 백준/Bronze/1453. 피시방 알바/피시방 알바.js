const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const arr = data[0].split(' ')
  let result = 0
  let table = {}

  arr.forEach((el)=> {
    !table[el] ? table[el] = true : result ++
  })

  console.log(result)
}
solution(input)
