const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N, _, str] = input

function solution(str) {
  let target = "IOI"
  for(let i = 1 ; i < N ; i ++) target += "OI"
  
  let result = 0
  for(let i = 0 ; i < str.length ; i++) {
    if(str[i] === "O") continue

    let tempIdx = 0
    let temp = ""
    for(let j = i ; j < target.length + i ; j ++) {
      temp += str[j]
      if(target[tempIdx] !== temp[tempIdx]) break
      tempIdx ++
      if(target === temp) result++
    }
  }

  console.log(result)
}

solution(str)
