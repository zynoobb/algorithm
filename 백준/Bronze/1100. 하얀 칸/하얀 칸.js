const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  let result = 0

  for(let i = 0 ; i < data.length ; i++) {
    for(let j = 0 ; j < data[i].length ; j++) {
      if(i%2===0 && j%2===0 && data[i][j] === "F") result ++
      if(i%2===1 && j%2===1 && data[i][j] === "F") result ++
    }
  }
  console.log(result)
}

solution(input)
 