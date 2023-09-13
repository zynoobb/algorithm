const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_, ...arr] = data.map(Number)
  const result = arr.sort((a,b)=> a-b)
  console.log(result.join('\n'))
}

solution(input)

