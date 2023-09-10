const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()

  const set = new Set()

  data.forEach((el)=> {
    const [x,y] = el.split(' ').map(Number)
    for(let i = 0 ; i < 10 ; i ++) {
      for(let j = 0 ; j < 10 ; j ++) {
        set.add(`${x+j}:${y+i}`)
      }
    }
  })

  console.log(set.size)
}

solution(input)