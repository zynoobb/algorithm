const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  let state = data[1] - data[0] === data[2] - data[1]
  const dif = state ? data[1] - data[0] : data[1] / data[0]
  console.log(state ? +data[N-1] + dif : data[N-1] * dif)
}

solution(input)