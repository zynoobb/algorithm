const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const table = {}
  data.forEach((el)=> {
    const [a,b] = el.split(' ')
    table["x" + a] = (table["x" + a]||0) + 1
    table["y" + b] = (table["y" + b]||0) + 1
  })

  const result = Object.entries(table)
    .filter((el)=> el[1] === 1)
    .sort((a,b)=> a[0].localeCompare(b[0]))
    .map((v)=> v[0].slice(1))

  console.log(result.join(' '))
}
solution(input)
