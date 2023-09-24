const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = []
  let n = +data

  for(let i = 2 ; i <= n ; i++) {
    while (n % i === 0) {
      n /= i
      result.push(i)
    }
    if(n === 1) break
  }

  console.log(result.join('\n'))
}

solution(input)
