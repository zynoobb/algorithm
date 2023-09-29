const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (n) => {
  const set = new Set([...String(n)])
  return set.size === String(n).length
}  
  
const act = (el, table) => {
  const [start, end] = el.split(' ')
  return table[end] - (table[start - 1] || 0)
}

function solution(data) {
  const table = {}
  table[1] = 1
  
  for(let i = 2 ; i <= 5000 ; i ++) {
    table[i] = table[i-1] + (verify(i) && 1)
  }
  
  const result = data.map(el => act(el,table))
  console.log(result.join('\n'))
}

solution(input) 