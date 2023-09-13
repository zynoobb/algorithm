const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const calc = {
  '+':(a,b)=> a + b,
  '-':(a,b)=> a - b,
  '*':(a,b)=> a * b,
  '/':(a,b)=> Math.floor(a / b),
}

function solution(data) {
  const result = data.reduce((acc,cur,idx)=> {
    if(calc[cur]) return calc[cur](acc, +data[idx+1])
    else return acc
  }, +data[0])

  console.log(result) 
}

solution(input)
