const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  const arr = data.map((el)=> el.split(" ").map(Number))
  for(let i = 1 ; i < N ; i ++) {
    arr[i][0] = arr[i][0] + Math.min(arr[i-1][1], arr[i-1][2])
    arr[i][1] = arr[i][1] + Math.min(arr[i-1][0], arr[i-1][2])
    arr[i][2] = arr[i][2] + Math.min(arr[i-1][0], arr[i-1][1])
  }
  console.log(Math.min(...arr.at(-1)))
}
solution(input)

