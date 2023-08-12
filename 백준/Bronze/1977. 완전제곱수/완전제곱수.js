const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  let [n,m] = data.map((el)=> Math.sqrt(el))
  n = Math.ceil(n)
  m = Math.floor(m)
  
  let pows = []
  for(let i = n ; i <= m ; i ++) pows.push(Math.pow(i,2))
  
  if(pows.length === 0) console.log(-1)
  else {
    const sum = pows.reduce((acc,cur)=> acc + cur, 0)
    const min = Math.min(...pows)
    console.log([sum,min].join('\n'))
  }
}

solution(input)
