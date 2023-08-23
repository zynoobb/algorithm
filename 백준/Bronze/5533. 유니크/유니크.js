const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  const scores = Array.from({length : N}, ()=> 0)
  const table = {}
  data.forEach((el)=> {
    const arr = el.split(' ')
    arr.forEach((n,j)=> {
      table[[n,j]] = (table[[n,j]]||0) + 1
    })
  })

  data.forEach((el,idx)=> {
    const arr = el.split(' ')
    arr.forEach((n,j)=> {
      if(table[[n,j]] === 1) scores[idx] += Number(n)
    })
  })

  console.log(scores.join('\n'))
}

solution(input)