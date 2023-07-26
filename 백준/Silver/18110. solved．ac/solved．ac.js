const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const leng = input.shift()
const except = Math.round(leng * 0.15)

function solution(data) {
  if(leng === "0") {
    console.log(0)
    return
  }

  const start = except
  const end = data.length - except

  const sorted = data.map((el)=> el = Number(el))
    .sort((a,b)=> a - b)
    .slice(start, end)

  const result = sorted.reduce((acc,cur)=> acc + cur,0)

  console.log(Math.round(result/(leng - except*2)))
}

solution(input)