const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const mid = Math.floor(data.length/2)
  const front = data.slice(0, mid).split("").reverse().join("")
  const back = data.length%2 === 0 ? data.slice(mid) : data.slice(mid+1)
  console.log(front === back ? 1 : 0)
}

solution(input)
