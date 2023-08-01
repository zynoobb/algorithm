const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const fibo = Array.from({length : 1 + +data}, ()=> 1)
  
  for(let i = 2 ; i < fibo.length ; i ++) {
    fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2])
  }
  let a = BigInt(fibo.at(-1)) * 2n
  let b = BigInt(fibo.at(-2)) * 2n
  
  console.log(String(a + b))
}
solution(input)
