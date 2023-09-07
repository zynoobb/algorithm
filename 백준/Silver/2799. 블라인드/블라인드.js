const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()

  const matrix = data.map(el=> {
    return el.split('')
      .filter(x => x !== '#').join('')
  }).filter(str => str !== '')

  const result = Array.from({length : 5}, ()=> 0)

  for(let i = 0 ; i < matrix.length ; i += 4) {
    for(let j = 0 ; j < matrix[i].length ; j += 4) {
      let temp = 0
      for(let k = i ; k < i + 4 ; k ++) {
        if(matrix[k][j] === '.') {
          result[temp] ++
          break
        } else temp ++

        if(k === i + 3) result[temp] ++
      }
    }
  }
  console.log(result.join(' '))
}

solution(input)
