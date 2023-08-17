const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const matrix = data.map(el=>el.split(""))
  
  matrix.forEach((arr,i)=> {
    arr.forEach((el, j)=> {
      if(el === "c") matrix[i][j] = 0
      else if(el === ".") {
        if(j === 0) matrix[i][j] = -1
        else if(matrix[i][j-1] === -1) matrix[i][j] = -1
        else matrix[i][j] = matrix[i][j-1] + 1
      }
    })
  })

  console.log(matrix.map(el=>el.join(" ")).join('\n'))
}
  
solution(input)