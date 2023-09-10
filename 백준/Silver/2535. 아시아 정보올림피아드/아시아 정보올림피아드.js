const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N], ...temp] = data.map(el => el.split(' ').map(Number))
  
  const arr = [...temp].sort((a,b)=> b[2] - a[2])
  const table = {}

  const result = []
  let medals = 0
  for(let i = 0 ; i < N ; i++) {
    [country, num, score] = arr[i]
    table[country] = (table[country] || 0) + 1
    if(table[country] > 2) continue

    result.push(country + ' ' + num)
    medals ++
    if(medals === 3) break
  }

  console.log(result.join('\n'))
}

solution(input)