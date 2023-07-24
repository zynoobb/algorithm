const fs = require('fs')
// const input = fs.readFileSync('입력/1026.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

const data = input.map((el)=> el.split(" "))

function solution (data) {
  const a = data[0].sort((a,b)=> a-b)
  const b = data[1].sort((a,b)=> b-a)

  const result = a.reduce((acc,cur,idx)=> {
    return acc + cur * b[idx]
  },0)

  console.log(result)
}

solution(data)