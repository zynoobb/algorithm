const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [arr, [x,_,__]] = data.map(el => el.split(' ').map(Number))
  
  console.log(arr.indexOf(x) + 1)
}

solution(input) 