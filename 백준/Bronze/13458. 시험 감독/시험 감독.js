const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const init = input.shift()

function solution(data) {
  const students = data[0].split(" ").map(el=> +el)
  const [b, c] = data[1].split(" ").map(el=> +el)
  
  let result = Number(init)
  
  students.forEach((el)=> {
    if(el - b > 0) result += Math.ceil((el-b)/c) 
  })

  console.log(result)
}

solution(input)
 