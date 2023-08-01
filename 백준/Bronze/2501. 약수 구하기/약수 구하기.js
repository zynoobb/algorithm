const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [a,n] = data.map(el=> +el)
  
  let result = []
  for(let i = 1 ; i <= Math.ceil(a/2) ; i++) {
    if(a%i === 0) result.push(i)
  }
  result.push(a)
  
  console.log(result[n-1] ? result[n-1] : 0)
}
solution(input)
