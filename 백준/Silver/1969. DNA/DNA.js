const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [N,M] = input.shift().split(' ').map(Number)

function solution(data) {
  const table = []
  for(let i = 0 ; i < M ; i ++) table[i] = {}

  data.forEach((str)=> {
    str.split('').forEach((el, idx)=> {
     table[idx][el] =  (table[idx][el] || 0) + 1
    })
  })
  
  let result = 0
  let resultStr = ''
  table.forEach((el)=> {
    const entries = Object.entries(el).sort((a,b)=> {
      if(a[1] !== b[1]) return b[1] - a[1]
      else return a[0].localeCompare(b[0])
    })
    result += N - entries[0][1]
    resultStr += entries[0][0]
  })

  console.log([resultStr, result].join('\n'))
}

solution(input)
