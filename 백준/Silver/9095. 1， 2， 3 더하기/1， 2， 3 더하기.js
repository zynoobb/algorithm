const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()
let table = Array.from({length : 12}, ()=> false)
table[1] = 1
table[2] = 2
table[3] = 4
for(let i = 4 ; i <= 11 ; i++ ) {
  table[i] = table[i - 3] + table[i - 2] + table[i - 1]
}

function solution(data) {
  let result = []
  data.forEach((el)=> result.push(table[el]))

  console.log(result.join('\n'))
}

solution(input)
