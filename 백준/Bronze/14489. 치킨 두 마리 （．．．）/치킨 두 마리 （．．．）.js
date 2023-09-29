const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [a,b,p] = data.map(el => el.split(' ').map(Number)).flat()
  
  console.log(
    a + b >= 2 * p 
    ? a + b - 2 * p 
    : a + b
    )
}

solution(input) 