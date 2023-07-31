const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = []
  let str = "* ".repeat(Math.ceil(data/2))
  for(let i = 1 ; i <= 2*data ; i++) {
    if(i%2===1) result.push(str.trim())
    else result.push(" " + str.slice(0, data - 1))
  }

  console.log(result.join('\n'))
}
solution(input)
