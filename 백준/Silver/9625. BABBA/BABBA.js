const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const fibonacci = Array.from({length : data + 1}, ()=> 1)
  fibonacci[0] = 1
  
  if(data <= 2) {
    if(data === 1) console.log("0 1")
    else if(data === 2) console.log("1 0")
    return
  }

  for(let i = 3 ; i <= data + 1 ; i ++) {
    fibonacci[i] = BigInt(fibonacci[i - 1]) + BigInt(fibonacci[i - 2])
  }
  console.log([String(fibonacci[data - 1]), String(fibonacci[data])].join(" "))
}
solution(Number(input))

// A 1 0
// B 0 1
// BA 1 1
// BAB 1 2
// BABBA 2 3
// BABBABAB 3 5
// BABBABABBABBA 5 8