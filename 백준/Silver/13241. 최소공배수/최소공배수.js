const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [n,m] = data.sort((a,b)=> b-a).map(el=>+el)

  let x = n
  let y = m
  while(y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }

  console.log(n*m/x)
}

solution(input)
 