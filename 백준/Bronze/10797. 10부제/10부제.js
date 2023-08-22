const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const N = input.shift()
  const result = data[0].split(" ").filter((el)=> Number(el) === Number(N)).length
  console.log(result)
}

solution(input)
