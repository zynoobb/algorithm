const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const leng = input.shift()
const inputData = input.join(" ").split(" ")

function solution(data) {
  const max = Math.max(...data)
  const result = data.reduce((acc,cur)=> {
    return acc + cur/max*100
  },0)
  console.log(result/leng)
}

solution(inputData)