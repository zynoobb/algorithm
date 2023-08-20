const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = []

  let temp = ""
  for(let i = 0 ; i < data.length ; i++) {
    temp += data[i]

    if(temp.length === 10 || i === data.length -1) {
      result.push(temp)
      temp = ""
    }
  }
  console.log(result.join('\n'))
}
solution(input)
