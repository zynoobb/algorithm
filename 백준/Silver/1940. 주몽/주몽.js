const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_,M,...temp] = data
  const sorted = temp[0].split(' ').map(Number).sort((a,b)=> a-b)

  let result = 0
  while(sorted.length > 1) {
    const sum = sorted[0] + sorted.at(-1)
    if(sum === +M) {
      sorted.shift()
      sorted.pop()
      result ++
    } else sum < +M ? sorted.shift() : sorted.pop()
  }

  console.log(result)
}

solution(input)
