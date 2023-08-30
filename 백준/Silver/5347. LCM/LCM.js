const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

const act = (str) => {
  const [a,b] = str.split(' ').map(Number)
  
  let x = a > b ? a : b
  let y = a > b ? b : a

  while (y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }

  return (a*b)/x
}

function solution(data) {
  const result = data.map((el)=> act(el))
  console.log(result.join('\n'))
}

solution(input)
