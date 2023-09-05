const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N,X,K], ...arr] = data.map(el=>el.split(' ').map(Number))

  const table = {}
  for(let i = 1 ; i <= N ; i++)
    table[i] = false

  table[X] = true

  for(let i = 0 ; i < K ; i ++) {
    const [a,b] = arr[i]
    if(table[a] || table[b]) {
      const temp = table[a]
      table[a] = table[b]
      table[b] = temp
    }
  }

  const result = Object.entries(table).filter(el=> el[1])
  console.log(result[0][0])
}

solution(input)
