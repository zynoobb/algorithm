const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = (N, arr) => {
  const avg = arr.reduce((acc,cur)=> acc+cur)/N
  const upperCase = arr.filter((el)=> el > avg).length
  const str = (upperCase/N*100).toFixed(3) + "%"
  return str
}

function solution(data) {
  result = []

  data.forEach((el)=> {
    const [N, ...arr] = el.split(" ").map(Number)
    result.push(act(N,arr))
  })

  console.log(result.join('\n'))
}
  
solution(input)