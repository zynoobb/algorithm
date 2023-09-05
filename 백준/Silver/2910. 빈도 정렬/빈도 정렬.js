const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()

  const table = {}
  const arr = data[0].split(' ')
  arr.forEach((el)=> table[el] = (table[el] || 0) + 1)

  const sorted = Object.entries(table).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    else return arr.indexOf(a[0]) - arr.indexOf(b[0])
  })

  let result = []
  sorted.forEach((el)=> {
    const [n, times] = el
    const temp = Array.from({length : times}, ()=> n)
    result = [...result, ...temp]
  })

  console.log(result.join(' '))
}

solution(input)
