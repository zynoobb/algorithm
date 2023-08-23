const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const maxLeng = Math.max(...data.map((el)=> el.length))
  const matrix = Array.from({length : maxLeng}, ()=> "")
  data.forEach((str)=> {
    for(let j = 0 ; j < str.length ; j++) {
      matrix[j] += str[j]
    }
  })
  console.log(matrix.join(''))
}

solution(input)