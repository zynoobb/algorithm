const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[_], ...arr] = data

  const table = {}
  arr.forEach(el=> table[el] = (table[el] || 0) + 1)

  for(let name in table) {
    if(table[name] % 2 === 1) {
      console.log(name)
      return
    }
  }
}

solution(input)
