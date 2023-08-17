const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const [a,b] = data

  const result = a.replaceAll(b,"#")
    .split("")
    .filter(el=> el === "#").length
    
  console.log(result)
}
  
solution(input)