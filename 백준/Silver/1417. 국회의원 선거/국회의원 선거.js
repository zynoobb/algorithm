const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  let [_, target, ...arr] = data.map(Number)
  let max = Math.max(...arr)
  let maxIdx = arr.indexOf(max)
  let result = 0

  while (max >= target) {
    arr[maxIdx] --
    target ++
    result ++
    max = Math.max(...arr)
    maxIdx = arr.indexOf(max)
  }

  console.log(result)
}

solution(input)
