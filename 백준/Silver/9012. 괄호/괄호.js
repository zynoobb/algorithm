const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

const act = (str) => {
  while(true) {
    if(str.length === 0) return "YES"
    else if(str.length !== 0 && str.indexOf("()") === -1) return "NO"
    if(str.indexOf("()") !== -1) str = str.replace("()", "")
  }
}

function solution(data) {
  let result = []
  data.forEach((el)=> {
    result.push(act(el))
  })

  console.log(result.join('\n'))
}

solution(input)
