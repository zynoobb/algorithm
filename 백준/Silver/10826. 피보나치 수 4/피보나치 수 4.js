const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const fibonacci = Array.from({length : Number(data) + 1}, ()=> 1)
  fibonacci[0] = 0
  for(let i = 3 ; i <= data ; i++) {
    fibonacci[i] = BigInt(fibonacci[i - 2]) + BigInt(fibonacci[i - 1])
  }

  console.log(String(fibonacci[data]))
}
solution(input)