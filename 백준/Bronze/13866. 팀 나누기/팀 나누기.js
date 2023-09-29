const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [a,b,c,d] = data.split(' ').map(Number).sort((x,y)=> x-y)

  console.log(Math.abs((b+c) - (a+d)))
}

solution(input) 