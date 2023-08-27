const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(' ')

function solution(data) {
  const [start,end] = data.map(Number).sort((a,b)=> a-b)
  const result = []
  for(let i = start + 1 ; i < end ; i++) {
    result.push(i)
  }

  console.log(result.length === 0 ? 0 : [result.length, result.join(' ')].join('\n'))
}

solution(input)
