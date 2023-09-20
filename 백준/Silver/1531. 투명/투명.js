const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_,M] = data.shift().split(' ').map(Number)
  const matrix = {}

  data.forEach(el=> {
    const [x1,y1,x2,y2] = el.split(' ').map(Number)
    for(let i = y1 ; i <= y2 ; i ++) {
      for(let j = x1 ; j <= x2 ; j ++) {
        matrix[i+'+'+j] = (matrix[i+'+'+j] || 0) + 1
      }
    }
  })

  const result = Object.values(matrix).filter(x => x > M).length
  console.log(result)
}

solution(input)
