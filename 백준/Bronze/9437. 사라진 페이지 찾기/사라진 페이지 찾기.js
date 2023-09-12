const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const [n, lost] = str.split(' ').map(Number)
  const sum = n + 1
  const another = lost % 2 === 0 ? lost - 1 : lost + 1

  return [another, sum - lost, sum - another].sort((a,b)=> a - b).join(' ')
}

function solution(data) {
  data.pop()
  
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)