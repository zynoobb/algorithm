const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const arr = str.split(' ')
  arr.shift()
  arr.unshift('god')
  return arr.join('')
}

function solution(data) {
  data.shift()

  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)