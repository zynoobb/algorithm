const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const act = (str) => {
  const arr = str.split(' ').sort((a,b)=> b-a)
  return arr[2]
}

function solution(data) {
  const result = data.map((el)=> act(el))
  console.log(result.join('\n'))
}

solution(input)