const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_, ...arr] = data.map(el=> el.split(' ').map(Number))
  
  const table = Array.from({length : 4}, ()=> false)
  table[1] = true
  
  arr.forEach(el => {
    const [a,b] = el
    if(table[a] || table[b]) {
      table[a] = !table[a]
      table[b] = !table[b]
    }
  })
  console.log(table.indexOf(true))
}

solution(input)