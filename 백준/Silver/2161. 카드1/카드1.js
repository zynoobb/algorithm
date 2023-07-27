const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let arr = Array.from({length : data}, (el, idx)=> el = data - idx)
  let result = []
  
  while (true) {
    if(arr.length === 1) break
    result.push(arr.pop())
    arr.unshift(arr.pop())
  }
  
  console.log([...result, ...arr].join(" "))
}

solution(input)
