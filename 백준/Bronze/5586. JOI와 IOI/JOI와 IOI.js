const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let joi = 0
  let ioi = 0

  for(let i = 0 ; i < data.length ; i ++) {
    if(data[i] + data[i+1] + data[i+2] === "JOI") joi ++
    if(data[i] + data[i+1] + data[i+2] === "IOI") ioi ++
  }
  console.log([joi,ioi].join('\n'))
}

solution(input)
