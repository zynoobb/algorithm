const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const arr = data.map(el=> el.split(" ")).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    else return a[0].localeCompare(b[0])
  })
  console.log(arr[0][0])
}

solution(input)
 