const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let fibo = Array.from({length : +data+1}, ()=> 1)

  for(let i = 3 ; i < fibo.length ; i ++) {
    fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2])
  }

  console.log(String(fibo.at(-1)))
}

solution(input)
