const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [y,x] = data.shift().split(' ').map(Number)
  const matrix = Array.from({length : y}, ()=> {
    return Array.from({length : x}, ()=> '.')
  })

  for(let i = 0 ; i < y ; i ++) {
    for(let j = 0 ; j < x ; j ++) {
      if(data[i][j] !== '.') {
        const temp = x - j - 1
        matrix[i][j] = data[i][j]
        matrix[i][temp] = data[i][j]
      }
    }
  }

  console.log(matrix.map(el => el.join('')).join('\n'))
}

solution(input)  
