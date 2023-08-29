const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  const arr = data.map(Number)
  let result = 0
  for(let i = N - 1 ; i > 0 ; i --) {
    const dif = arr[i] - arr[i-1] - 1
    if(dif < 0) {
      result -= dif
      arr[i-1] += dif
    }
  }

  console.log(result)
}

solution(input)