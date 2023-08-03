const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (arr) => {
  const sorted = arr.sort((a,b)=> b-a)
  return sorted[0] + sorted[1] + sorted[2]
}

function solution(data) {
  const k = data.map(el=>+el)
  const w = k.splice(0,10)
  
  console.log(`${act(w)} ${act(k)}`)
}

solution(input)
