const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


const [_, M] = input.shift().split(' ')
function solution(data) {
  const arr = data[0].split(" ").map(Number)
  
  let def = 0
  for(let i = 0 ; i < M ; i ++) {
    def += arr[i]
  }

  let max = def
  for(let i = 0 ; i < arr.length - M ; i ++) {
    const sum = def - arr[i] + arr[+M + i]
    if(sum > max) max = sum
    def = sum
  }
  console.log(max)
}

solution(input)
 