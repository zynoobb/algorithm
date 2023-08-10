const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b] = data.split(' ')
  let max = 0

  for(let i = 1 ; i <= b ; i++) {
    const reverse = String(a*i).split("").reverse().join("")
    if(max < +reverse) max = +reverse
  }

  console.log(max)
}

solution(input)
 