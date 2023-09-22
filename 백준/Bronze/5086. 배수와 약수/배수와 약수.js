const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (el) => {
  const [a,b] = el.split(' ').map(Number)
  return a % b === 0 ? 'multiple' : b % a === 0 ? 'factor' : 'neither'
}

function solution(data) {
  data.pop()
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)
