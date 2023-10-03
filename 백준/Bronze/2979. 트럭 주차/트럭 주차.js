const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [costs, ...arr] = data.map(el => el.split(' ').map(Number))
  
  const table = {}
  arr.forEach(el=> {
    const [start, end] = el
    for(let i = start + 1 ; i <= end ; i ++) {
      table[i] = (table[i] || 0) + 1
    }
  })
  let result = 0
  for(let v in table) {
    result += table[v] * costs[table[v]-1] 
  }
  console.log(result)
}

solution(input)  
