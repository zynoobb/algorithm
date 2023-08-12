const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const N = input.shift()
function solution(data) {
  const steps = data.map(el=> el.split(" ").map(Number))

  for(let i = 1 ; i < steps.length ; i ++) {
    for(let j = 0 ; j < steps[i].length ; j ++) {
      let temp
      if(j === 0) temp = steps[i-1][j]
      else if(i === j) temp = steps[i-1][j-1]
      else temp = Math.max(steps[i-1][j-1], steps[i-1][j])
      steps[i][j] += temp
    }
  }
  const result = Math.max(...steps.at(-1))
  console.log(result)
}

solution(input)
