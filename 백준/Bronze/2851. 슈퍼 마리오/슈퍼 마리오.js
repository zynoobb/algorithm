const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n').map(Number)


function solution(data) {
  let sum = 0
  let result

  for(let i = 0 ; i < data.length ; i ++) {
    sum += data[i]
    if(sum >= 100) {
      const [before, next] = [sum - data[i], sum].map(el=> Math.abs(el - 100))
      result = before >= next ? 100 + next : 100 - before
      break
    }
  }
  console.log(result ? result : sum)
}
solution(input)

