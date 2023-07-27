const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  let arr = []
  data.forEach((el)=> {
    el !== "0" ? arr.push(el) : arr.pop()
  })
  console.log(arr.reduce((acc,cur)=> acc + Number(cur),0))
}

solution(input)