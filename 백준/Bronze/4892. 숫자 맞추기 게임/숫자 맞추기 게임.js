const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (n,idx) => {
  const arr = [n]
  arr[1] = arr[0] * 3
  arr[2] = arr[1] % 2 === 0 ? arr[1]/2 : (arr[1]+1)/2
  arr[3] = arr[2] * 3
  arr[4] = Math.floor(arr[3] / 9)
  return `${idx+1}. ${!!(arr[1] % 2) ? 'odd' : 'even'} ${arr[4]}`
}

function solution(data) {
  data.pop()
  const result = data.map((el,idx)=> act(+el,idx))
  
  console.log(result.join('\n'))
} 

solution(input)
