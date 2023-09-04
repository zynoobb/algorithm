const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  let count = 0
  const arr = str.split('X')
  arr.forEach((el)=> {
    el.length > 1 && count ++
  })

  return count
}

function solution(data) {
  const [N, ...matrix] = data
  let [lineX, lineY] = [0,0]
  const matrixY = Array.from({length : N}, ()=> "")

  matrix.forEach((y)=> {
    y.split('').forEach((x, j)=> matrixY[j] += x)
  })

  for(let i = 0 ; i < N ; i ++) {
    lineX += act(matrix[i])
    lineY += act(matrixY[i])
  }

  console.log([lineX, lineY].join(' '))
} 

solution(input)