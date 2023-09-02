const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  let scores = [100, 100]
  data.forEach(el => {
    const [a,b] = el.split(' ')
    if(a > b) scores[1] -= a
    else if(a < b) scores[0] -= b
  })

  console.log(scores.join('\n'))
}

solution(input)