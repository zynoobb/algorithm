const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.pop()

  const result = []
  data.forEach((el)=> {
    const [a,b] = el.split(' ').map(Number)
    result.push(a+b)
  })
  console.log(result.join('\n'))
}

solution(input)
