const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  const result = [0,0]

  data.forEach((el)=> {
    const [a,b] = el.split(" ").map(Number)
    if(a > b) result[0] ++
    if(b > a) result[1] ++
  })

  console.log(result.join(' '))
}

solution(input)
