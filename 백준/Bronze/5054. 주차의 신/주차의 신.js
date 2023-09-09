const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const sorted = str.split(' ').sort((a,b)=>a-b).map(Number)
  return (sorted.at(-1) - sorted[0]) * 2
}

function solution(data) {
  data.shift()
  
  const result = []
  data.forEach((el,idx)=> {
    if(idx % 2 === 1) result.push(act(el))
  })
  
  console.log(result.join('\n'))
}

solution(input)