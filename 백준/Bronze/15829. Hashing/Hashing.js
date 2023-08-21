const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  const str = data[0]
  const table = {}
  for(let i = 1 ; i <= 26 ; i ++) {
    table[String.fromCharCode(96+i)] = i
  }

  let result = 0
  for(let i = 0 ; i < str.length ; i ++) {
    result += (table[str[i]] * Math.pow(31,i))
  }
  console.log(result)
}

solution(input)
