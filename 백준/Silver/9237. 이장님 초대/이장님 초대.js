const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[_], arr] = data.map(el=>el.split(' ').map(Number))
  
  const sorted = arr.sort((a,b)=> b-a).map((el,idx)=> el + idx)
  console.log(Math.max(...sorted) + 2)
}

solution(input)
