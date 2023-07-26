const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  for(let i = 1 ; i <= 9 ; i ++) {
    console.log(`${data} * ${i} = ${data*i}`)
  }
}

solution(input)