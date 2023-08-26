const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const dials = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"]
  let result = 0

  for(let i = 0 ; i < data.length ; i ++) {
    dials.forEach((dial,idx)=> {
      if(dial.includes(data[i])) result += (idx + 1) + 2
    })
  }
  console.log(result)
}

solution(input)