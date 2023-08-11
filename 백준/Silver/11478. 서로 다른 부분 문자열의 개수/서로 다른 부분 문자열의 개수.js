const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let table = {}

  for(let i = 0 ; i < data.length ; i ++) {
    for(let j = i ; j < data.length ; j ++) {
      const str = data.slice(i,j + 1)
      table[str] = true
    }
  }
  console.log(Object.values(table).length)
}

solution(input)
 