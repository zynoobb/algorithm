const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let num = 665
  let count = 0

  while (count < data) {
    num ++
    if(String(num).includes("666")) 
      count ++
  }
  console.log(num)
}

solution(input)
 