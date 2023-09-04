const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[A,B], [_], arr] = data.map(el=>el.split(' '))
  
  let sum = arr.reverse().reduce((acc,cur,idx)=> {
    const temp = cur * Math.pow(A, idx)
    return acc + temp
  }, 0)
  
  const result = []
  while (sum > 0) {
    result.unshift(sum % B)
    sum = Math.floor(sum/B)
  }

  console.log(result.join(' '))
} 
solution(input)
