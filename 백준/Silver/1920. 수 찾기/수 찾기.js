const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(data) {
  let result = []
  let table = {}

  const nArr = data[1].split(" ")
  const mArr = data[3].split(" ")

  nArr.forEach((el)=> table[el] = true)

  mArr.forEach((el)=> {
    table[el] ? result.push(1) : result.push(0)
  })

  console.log(result.join("\n"))
}

solution(input)