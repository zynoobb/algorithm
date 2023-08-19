const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  const arr = data[0].split(" ").map(Number)
  let result = 0
  let count = 0
  let height = arr[0]
  for(let i = 1 ; i < N ; i++) {
    if(height > arr[i]) count ++
    else {
      result = count > result ? count : result
      count = 0
      height = arr[i]
    }

    if(i === N-1) result = count > result ? count : result
  }
  console.log(result)
}
solution(input)

