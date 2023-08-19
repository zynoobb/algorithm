const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  const arr = data[0].split(" ").map(Number)
  const steps = Array.from({length : N}, ()=> 0)
  let temp = 0
  for(let i = 1 ; i < N ; i ++) {
    if(arr[i] > arr[i-1]) {
      temp += arr[i] - arr[i-1]
      steps[i] = temp
    } else {
      temp = 0
    }
  }

  console.log(Math.max(...steps))
}
solution(input)

