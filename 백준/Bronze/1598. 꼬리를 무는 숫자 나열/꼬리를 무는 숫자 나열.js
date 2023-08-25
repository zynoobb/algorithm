const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [[x1,y1], [x2,y2]] = data.split(' ').map((el)=>{
    return [Math.ceil(el/4), (el-1)%4]
  })
  
  const result = Math.abs(x1 - x2) + Math.abs(y1 - y2)
  console.log(result)
}

solution(input)