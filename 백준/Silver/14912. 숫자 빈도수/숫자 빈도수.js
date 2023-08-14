const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [target, find] = data

  let result = 0
  let i = 1
  while (i <= target) {
    result += String(i++).split("").filter((el)=> el===find).length 
  }
  console.log(result)
}

solution(input)
