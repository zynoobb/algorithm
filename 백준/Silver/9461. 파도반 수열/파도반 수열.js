const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()
function solution(data) {
  const max = Math.max(...data)
  const pado = [1,1,1,2,2,3,4,5,7,9]

  for(let i = pado.length-1 ; i < max ; i++) {
    const next = pado[i] + pado[i-4]
    pado.push(next)
  }

  let result = []
  data.forEach((el)=> result.push(pado[el-1]))
  console.log(result.join("\n"))
}

solution(input)
