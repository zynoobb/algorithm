const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N,M], arr] = data.map(el=> el.split(' ').map(Number))
  
  let sum = 0
  for(let i = 0 ; i < N ; i ++) {
    sum += arr[i]

    if(sum > M) {
      console.log(i)
      return
    }
  }
  console.log(arr.length)
} 

solution(input)
