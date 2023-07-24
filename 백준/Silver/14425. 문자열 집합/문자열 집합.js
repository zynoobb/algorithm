const fs = require('fs')
// const input = fs.readFileSync('입력/14425.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const [nIdx, _] = input[0].split(" ")
const idx = Number(nIdx)
const n = input.slice(1,idx + 1)
const m = input.slice(idx + 1)

function solution(n,m) {
  let result = 0
  let obj = {}

  n.forEach((el)=> obj[el] = true)

  m.forEach((el)=> {
    if(obj[el]) result++
    }
  )
  console.log(result)
}

solution(n,m)