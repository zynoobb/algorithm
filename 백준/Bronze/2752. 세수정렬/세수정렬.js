const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const arr = data.split(" ").map(Number).sort((a,b)=> a-b)
  console.log(arr.join(' '))
}

solution(input)
