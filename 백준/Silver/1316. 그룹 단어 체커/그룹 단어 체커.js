const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = 0

  data.forEach((str)=> {
    let temp = ""
    for(let i = 0 ; i < str.length ; i ++) {
      if(temp.indexOf(str[i]) === -1) temp += str[i]
      else if(temp.at(-1) === str[i]) continue
      else return
    }
    result ++
  })

  console.log(result)
}

solution(input)
